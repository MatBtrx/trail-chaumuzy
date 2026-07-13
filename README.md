# Trail de Chaumuzy 2027 — site web

Site statique (HTML/CSS/JS). Aucune compilation nécessaire : tout est déjà prêt.

## Mise en ligne via GitHub + Vercel (recommandé, sans terminal)

### 1. Mettre les fichiers sur GitHub
1. Crée un compte sur https://github.com (gratuit).
2. Clique **+ → New repository**. Nomme-le par ex. `trail-chaumuzy`, laisse-le **Public** ou **Private**, clique **Create repository**.
3. Sur la page du dépôt vide : clique **« uploading an existing file »**.
4. **Glisse-dépose TOUT le contenu de ce dossier** (les fichiers + les dossiers `assets/` et `build/`) dans la zone d'upload.
   > Important : dépose le *contenu* du dossier, pas le dossier `site` lui-même — `index.html` doit être à la racine du dépôt.
5. Clique **Commit changes**.

### 2. Déployer sur Vercel
1. Va sur https://vercel.com → **Sign up** → choisis **Continue with GitHub**.
2. **Add New… → Project** → **Import** le dépôt `trail-chaumuzy`.
3. Laisse tous les réglages par défaut (Framework Preset : **Other**) → **Deploy**.
4. En ~30 s, le site est en ligne sur `https://trail-chaumuzy.vercel.app`.

### 3. Brancher le domaine
Projet Vercel → **Settings → Domains → Add** → saisis ton domaine.
Vercel affiche les enregistrements DNS à configurer chez ton registrar (OVH, Gandi…). HTTPS automatique.

## Mettre à jour le site ensuite
- Sur GitHub, ouvre le fichier à modifier → icône crayon → édite → **Commit**.
- Vercel redéploie automatiquement en quelques secondes.

### Mettre à jour le compteur de dossards
Édite **`dossards.json`** : pour chaque catégorie, renseigne `sold` (inscrits relevés sur Miles Republic) et `quota`. Mets `updated` à la date du jour. Renseigne `registrationUrl` (URL Miles Republic) pour activer le bouton « S'inscrire ».

## À faire après le 1er déploiement
- **Domaine dans les métadonnées** : le domaine `trail-chaumuzy.fr` est un placeholder dans `index.html` (balises og:/canonical/SEO). Remplace-le par ton vrai domaine, ou demande-moi de régénérer le dossier.
- **Brevo** : authentifie ton domaine d'envoi (SPF/DKIM) dans Brevo pour les e-mails de pré-inscription.

## Contenu du dossier
- `index.html` — page principale
- `mentions-legales.html` — mentions légales / RGPD
- `hifi.css`, `trace-data.js`, `dossards.json` — styles, tracés GPS, données jauge
- `build/` — code de la page (JavaScript précompilé)
- `assets/` — logos, photo, image de partage, favicon, tracés GPX, fichier calendrier
- `vercel.json` — en-têtes de sécurité + cache (lu automatiquement par Vercel)
