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

**Ce dépôt est la référence du site.** Le code de la page d'accueil est `build/*.js` (React précompilé) : on le modifie directement. Les anciennes sources `.jsx` n'existent plus (elles n'ont pas été reprises lors du passage de Claude Design à claude.ai).

## Mettre à jour le site (depuis le 17/11/2026)

Le site se pilote depuis Claude (projet claude.ai « Synapse-sport »), comme celui du Trail de Blancs-Coteaux.

1. **Proposer les changements** sur le canevas Claude Design **« Site Trail de Chaumuzy — Accueil »** : copie statique de la page d'accueil, découpée en trois planches. On y modifie les textes directement, on ajoute ou supprime des éléments, ou on laisse un commentaire sur un élément. Rien de ce canevas n'est publié tel quel.
2. **Dire « publie » (ou « mise en ligne ») à Claude.** Claude relit les planches, repère les modifications et les reporte dans ce dépôt :
   - sur une **branche de travail**, jamais directement sur `main` ;
   - il vérifie le rendu et l'**aperçu Vercel** de la branche ;
   - puis il publie sur `main` : Vercel met le site en ligne en environ 30 secondes ;
   - il vérifie www.traildechaumuzy.fr et le statut du déploiement Vercel ;
   - enfin il remet à jour la copie `site/` de l'ancien projet Claude Design « Trail de Chaumuzy » et, si besoin, le canevas.
3. **Ne plus téléverser d'export Claude Design** (GitHub → *Add file → Upload files*) : un export écrase les modifications faites dans ce dépôt (c'est ce qui est arrivé avec le dernier commit « Add files via upload »). L'ancien projet Claude Design ne sert plus qu'à consulter la copie `site/`.
4. **Cache** : après **chaque** modification d'un fichier JS ou CSS (`build/*.js`, `hifi.css`, `trace-data.js`, `tracking.js`…), augmenter son numéro `?v=` dans `index.html` (format `AAAAMMJJ` + lettre, par ex. `?v=20261117a`). Sinon les visiteurs gardent l'ancienne version, mise en cache pour un an.
5. **Petite correction urgente** (texte d'une page légale, `dossards.json`, PDF) : possible aussi sur GitHub (fichier → crayon → **Commit**), en le signalant à Claude pour qu'il remette à jour le canevas et la copie `site/`.

Projet Vercel : équipe `synapse-sport`, projet `trail-chaumuzy`. Aucun secret (clé, jeton, mot de passe) ne doit être placé dans ce dépôt : il est publié tel quel.

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
  ⚠️ L'équipe Vercel est sur l'**offre gratuite** : ces événements ne sont pas enregistrés (seules les visites, sources et appareils sont comptés). Le code reste en place et fonctionnerait avec l'offre Pro.
- **UTM** : les liens Miles Republic portent `utm_source=traildechaumuzy.fr&utm_campaign=inscriptions-2027&utm_content=<emplacement>` : à lire dans les statistiques de Miles Republic.
- **Bénévoles venus du site** : le bouton « Je deviens bénévole » porte le code `r=c1165979cd` du recruteur « Site internet » de Synapse Crew. Chaque bénévole inscrit depuis le site y est rattaché : le nombre se lit dans Synapse Crew → Recruteurs.
  ⚠️ Un lien de recruteur permet de s'inscrire même quand les inscriptions sont fermées dans Synapse Crew : pour arrêter les inscriptions depuis le site, supprimer aussi ce recruteur (ou retirer la section).

## Référencement
Search Console : soumettre `sitemap.xml` et demander l'indexation de la page d'accueil après une grosse mise à jour. Vérifier l'image de partage avec le Facebook Sharing Debugger ou LinkedIn Post Inspector.

## Historique utile
- **17/11/2026** : pilotage du site depuis Claude (canevas « Site Trail de Chaumuzy — Accueil », copie `site/` dans l'ancien projet Claude Design). Fin des téléversements d'export Claude Design.
- **07/11/2026** : section « Devenez bénévole » et entrée « Bénévoles » du menu masquées (code conservé dans `build/hifi-app.js` et `build/hifi-sections.js`, à décommenter pour réafficher).
- **03/11/2026** : section « Devenez bénévole » (Synapse Crew) et suivi `cta_benevole`. Tri du dépôt.
- **28/10/2026** : ouverture des inscriptions. Retrait de la pré-inscription Brevo (`api/subscribe.js`, `merci.html`), de la liste d'attente et des anciennes versions de `index.html`. Les variables Vercel `BREVO_*` ne servent plus.
- **27/10/2026** : distances officielles 23 et 15 km (anciennes pages et GPX 18/24 km redirigés).
