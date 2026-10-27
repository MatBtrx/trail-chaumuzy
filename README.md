> **Mise à jour 27/10/2026 - Inscriptions ouvertes** : tous les boutons pointent vers la billetterie Miles Republic (https://fr.milesrepublic.com/event/trail-de-chaumuzy-18058), avec suivi utm + événement `cta_inscription`. Liste d'attente Brevo et `ouverture.js` retirés. Compte à rebours vers le départ. Distances officielles : 23 km (D+/D- 407 m), 15 km (D+/D- 273 m). Réduction de 2 € pour les licencié(e)s FFA.

# Trail de Chaumuzy 2027 — site officiel

Site statique + une fonction serverless (pré-inscription Brevo). Déployé sur **Vercel** depuis la **racine** du dépôt. Domaine de production : **https://www.traildechaumuzy.fr**

Événement : dimanche 4 avril 2027 — organisé par **Marne Outdoor Expériences** (association loi 1901).

---

## Structure du dépôt (racine = racine de déploiement)

| Fichier / dossier | Rôle |
|---|---|
| `index.html` | **Page servie en production** — bundle autonome (tout inliné : CSS, JS, logos en data-URI). Ne pas éditer à la main. |
| `index.dev.html` | Version de **développement** (charge les sources séparées ci-dessous). Sert à régénérer `index.html`. |
| `index.prod.html` | Gabarit de build (mêmes `<head>` SEO + scripts) à partir duquel `index.html` est compilé. |
| `hifi-app.jsx` · `hifi-sections.jsx` · `hifi-ui.jsx` | **Sources** React (JSX) de la page. |
| `hifi.css` | Feuille de style (utilisée aussi par les pages légales / merci). |
| `trace-data.js` · `logo-data.js` · `dossards.json` | Tracés GPS, logos en base64, données de la jauge dossards. |
| `build/` | JS précompilé (généré depuis les `.jsx`). |
| `mentions-legales.html` · `confidentialite.html` · `merci.html` | Pages légales RGPD + page de confirmation double opt-in. |
| `api/subscribe.js` | **Fonction serverless Vercel** — pré-inscription Brevo (double opt-in). |
| `assets/` | Logos, favicon, image de partage `og-image-2027-v2.jpg`, tracés `.gpx`, calendrier `.ics`. |
| `robots.txt` · `sitemap.xml` | SEO. |
| `vercel.json` | En-têtes de sécurité + cache, routage de la fonction API. |

> **Le fichier servi est `index.html` (bundle autonome).** Les sources `.jsx` / `build/` / `trace-data.js` / `logo-data.js` ne sont **pas** chargées par la prod (déjà inlinées) — elles servent uniquement à régénérer le bundle.

---

## Déploiement (Vercel + GitHub)

1. Pousser le contenu de la racine sur GitHub (`index.html` doit être à la racine du dépôt).
2. Vercel → **Add New → Project** → importer le dépôt. Framework Preset : **Other**. **Deploy**.
3. **Settings → Domains** → ajouter `www.traildechaumuzy.fr` (DNS + HTTPS automatiques).

### Variables d'environnement (Vercel → Settings → Environment Variables)
| Variable | Valeur |
|---|---|
| `BREVO_API_KEY` | Clé API v3 Brevo. |
| `BREVO_DOI_TEMPLATE_ID` | *(optionnel)* ID numérique du template « Trail de Chaumuzy_confirmation double opt-in ». Défaut : `1`. |

Sans `BREVO_API_KEY`, la fonction `/api/subscribe` renvoie une erreur 500 (le reste du site fonctionne).

---

## Fonctionnement de la pré-inscription (double opt-in)

1. Le visiteur remplit le formulaire (prénom, nom, e-mail, parcours) → `POST /api/subscribe`.
2. La fonction appelle Brevo `v3/contacts/doubleOptinConfirmation` avec le template DOI.
3. Brevo envoie l'e-mail de confirmation ; le contact n'est ajouté **qu'après** clic sur le lien.
4. Le lien redirige vers `merci.html`.

Mapping parcours → liste Brevo : **23 km → 8**, **15 km → 9**, « Je ne sais pas » → **10**.

---

## Mettre à jour le site

### Contenu / style / structure
Éditer les sources (`hifi-*.jsx`, `hifi.css`), puis **régénérer** `index.html` (bundle). Le plus simple : demander la régénération dans Claude, ou rebuild via l'outil de bundling. Ne jamais éditer `index.html` directement (il sera écrasé au prochain build).

### Compteur de dossards
Éditer **`dossards.json`** : `sold` (inscrits relevés sur Miles Republic) et `quota` par catégorie, puis `updated` à la date du jour.

### Pages légales
`mentions-legales.html` et `confidentialite.html` sont des fichiers HTML autonomes — édition directe possible.

---

## Checklist post-déploiement
- [ ] `BREVO_API_KEY` (+ éventuellement `BREVO_DOI_TEMPLATE_ID`) définies sur Vercel.
- [ ] Template DOI Brevo actif et testé (e-mail reçu + redirection `merci.html`).
- [ ] Domaine d'envoi Brevo authentifié (SPF/DKIM).
- [ ] `og-image-2027-v2.jpg` vérifié au partage (LinkedIn Post Inspector / Facebook Debugger).
- [ ] `sitemap.xml` soumis dans Google Search Console.


## Ouverture des inscriptions (28/10/2026 à 10h00)

Tout est automatisé dans `(supprimé) ouverture.js`. **Seule action requise** : coller le lien Miles Republic dans `dossards.json` > `"registrationUrl"`, puis pousser.

- Tant que le lien est vide, le site reste en mode « liste d'attente ».
- Lien renseigné + date atteinte : boutons « Je m'inscris » vers la billetterie, liste d'attente Brevo masquée, barre mobile, FAQ, titre de l'onglet, repère d'urgence FFA et données Google (InStock) basculent ensemble.
- Aperçu à tout moment : `traildechaumuzy.fr/?ouverture`.

## Suivi des ventes (tracking.js)

Événements envoyés à Vercel Web Analytics (Custom Events, offre Pro) :
- `cta_inscription` { emplacement, distance } : clic vers la billetterie Miles Republic (après le 28/10).
- `cta_preinscription` { emplacement } : clic avant l'ouverture.
- `liste_attente_envoi`, `rdv_b2b`, `gpx`, `reglement_pdf`, `contact_email`, `contact_partenaire`, `partage`.

Les liens billetterie portent aussi `utm_source=traildechaumuzy.fr&utm_medium=site&utm_campaign=inscriptions-2027&utm_content=<emplacement>` : à lire dans les statistiques Miles Republic (ou Google Analytics s'il y est branché) pour relier un clic à une vente.

Emplacements : nav, menu-mobile, hero, tarif-15, tarif-23, faq, footer, barre-mobile, page-23km, page-15km, page-sejour.
