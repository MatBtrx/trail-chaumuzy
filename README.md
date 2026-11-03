# Trail de Chaumuzy 2027 — site officiel

Site statique (HTML, CSS, JavaScript précompilé), sans serveur ni compilation.
**https://www.traildechaumuzy.fr** · dépôt `MatBtrx/trail-chaumuzy` (branche `main`) · déployé par **Vercel** à chaque commit (projet de l'équipe Synapse Sport).

- **Course** : dimanche 4 avril 2027, Chaumuzy (Montagne de Reims, Marne). 1re édition.
- **Parcours** : 23 km (D+ 407 m) et 15 km (D+ 273 m). 500 dossards.
- **Billetterie** : Miles Republic, https://fr.milesrepublic.com/event/trail-de-chaumuzy-18058 (inscriptions ouvertes le 28/10/2026). Réduction de 2 € pour les licencié(e)s FFA.
- **Bénévoles** : inscription dans Synapse Crew, https://synapse-crew.vercel.app/inscription/trail-de-chaumuzy (65 bénévoles, 3 et 4 avril 2027).
- **Organisation** : Marne Outdoor Expériences (association loi 1901) · marne.outdoor.experiences@gmail.com

---

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | Page d'accueil : `<head>` SEO (Open Graph, données structurées SportsEvent et FAQPage), puis chargement des scripts. |
| `build/hifi-ui.js` · `build/hifi-sections.js` · `build/hifi-app.js` | Code React précompilé de la page (composants, sections, ordre des sections). |
| `hifi.css` | Styles de toutes les pages. |
| `trace-data.js` | Tracés GPS des deux parcours. |
| `logo-data.js` | Logos embarqués (data-URI). |
| `dossards.json` | Jauge des dossards (voir plus bas). |
| `tracking.js` | Suivi des clics (Vercel Web Analytics). |
| `mentions-legales.html` · `confidentialite.html` | Pages légales et RGPD. |
| `assets/` | Logos, favicon, image de partage `og-image-2027-v4.jpg`, photo, règlement sportif PDF, tracés `.gpx` 15 et 23 km, calendrier `.ics`. |
| `robots.txt` · `sitemap.xml` | Référencement. |
| `vercel.json` | En-têtes de sécurité, cache, redirections des anciennes adresses (pages 18 et 24 km, anciens GPX). |

Les sources JSX ne sont pas dans le dépôt : elles sont dans le projet **Claude Design** du trail.

## Mettre à jour le site

- **Petite modification** (texte d'un fichier HTML, `dossards.json`, PDF) : sur GitHub, ouvrir le fichier → crayon → **Commit**. Vercel publie en environ 30 secondes.
- **Nouvel export Claude Design** : GitHub → **Add file → Upload files** → déposer le contenu exporté en gardant les chemins (`build/`, `assets/`).
  ⚠️ Un export qui ne contient pas les ajouts faits directement dans ce dépôt les efface. Ajouts à reporter dans Claude Design avant tout nouvel export :
  - section « Devenez bénévole » (commit `39ddd93`, 3/11/2026) ;
  - `tracking.js` et son chargement dans `index.html`.
- **Cache** : après modification d'un fichier JS ou CSS, augmenter son numéro `?v=` dans `index.html`, sinon les visiteurs gardent l'ancienne version.
- **Claude Design autonome ferme le 14/12/2026** : ce dépôt devient alors la seule référence du site.

### Jauge de dossards
`dossards.json` : renseigner `sold` (inscrits relevés sur Miles Republic) par catégorie et `updated` (date du relevé). La jauge s'affiche quand `SHOW_GAUGE` vaut `true` (en tête de `build/hifi-sections.js`).

### Interrupteurs (en tête de `build/hifi-sections.js`)
| Interrupteur | État | Effet |
|---|---|---|
| `SHOW_GAUGE` | masqué | Jauge de dossards et tarif de lancement |
| `SHOW_GPX` | masqué | Boutons de téléchargement des tracés GPX |
| `SHOW_PARTNER_WALL` | masqué | Mur des partenaires |

## Suivi d'audience

- **Vercel Web Analytics** (visites, sources, appareils) et **Speed Insights** (temps de chargement) : activés dans le projet Vercel.
- **Événements de clic** (`tracking.js`) : `cta_inscription` (billetterie, avec emplacement, distance et source de la visite), `cta_benevole` (inscription bénévole Synapse Crew), `reglement_pdf`, `gpx`, `calendrier`, `itineraire`, `contact_email`, `contact_partenaire`, `rdv_b2b`, `partage`, `faq_question`, `parcours_onglet`, `section_vue`, `scroll_profondeur`.
  Les événements personnalisés ne sont enregistrés qu'avec l'offre Vercel Pro ; sans elle, seules les pages vues sont comptées.
- **UTM** : les liens Miles Republic portent `utm_source=traildechaumuzy.fr&utm_campaign=inscriptions-2027&utm_content=<emplacement>`, et le lien bénévole `utm_campaign=benevoles-2027`. À lire dans les statistiques de Miles Republic et de Synapse Crew.

## Référencement
Search Console : soumettre `sitemap.xml` et demander l'indexation de la page d'accueil après une grosse mise à jour. Vérifier l'image de partage avec le Facebook Sharing Debugger ou LinkedIn Post Inspector.

## Historique utile
- **03/11/2026** : section « Devenez bénévole » (Synapse Crew) et suivi `cta_benevole`. Tri du dépôt.
- **28/10/2026** : ouverture des inscriptions. Retrait de la pré-inscription Brevo (`api/subscribe.js`, `merci.html`), de la liste d'attente et des anciennes versions de `index.html`. Les variables Vercel `BREVO_*` ne servent plus.
- **27/10/2026** : distances officielles 23 et 15 km (anciennes pages et GPX 18/24 km redirigés).
