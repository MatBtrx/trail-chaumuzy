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
| `assets/` | Logos, favicon, image de partage `og-image.png`, tracés `.gpx`, calendrier `.ics`. |
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

Mapping parcours → liste Brevo : **24 km → 8**, **18 km → 9**, « Je ne sais pas » → **10**.

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
- [ ] `og-image.png` vérifié au partage (LinkedIn Post Inspector / Facebook Debugger).
- [ ] `sitemap.xml` soumis dans Google Search Console.
