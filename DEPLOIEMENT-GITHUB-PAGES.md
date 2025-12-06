# 🚀 Déploiement sur GitHub Pages

## Étape 1 : Créer un dépôt GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur **New repository** (ou le bouton ➕ en haut à droite)
3. Nommez votre dépôt (par exemple : `projet360-ia`)
4. Laissez-le **Public** (obligatoire pour GitHub Pages gratuit)
5. **Ne cochez PAS** "Initialize with README"
6. Cliquez sur **Create repository**

## Étape 2 : Initialiser Git dans votre projet

Ouvrez PowerShell dans le dossier du projet et exécutez :

```powershell
cd "c:\Projet360 IA work"
git init
git add .
git commit -m "Initial commit"
```

## Étape 3 : Lier au dépôt GitHub

Remplacez `VOTRE-USERNAME` et `VOTRE-REPO` par vos informations :

```powershell
git remote add origin https://github.com/VOTRE-USERNAME/VOTRE-REPO.git
git branch -M main
git push -u origin main
```

## Étape 4 : Déployer sur GitHub Pages

### Option A : Déploiement manuel (le plus simple)

1. Sur GitHub, allez dans votre dépôt
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous "Source", sélectionnez la branche **main**
5. Sélectionnez le dossier **/ (root)**
6. Cliquez sur **Save**

Puis, poussez le dossier `dist` :

```powershell
cd "c:\Projet360 IA work"
git add dist -f
git commit -m "Add dist folder"
git push
```

Ensuite, retournez dans **Settings > Pages** et changez le dossier en **/dist**

### Option B : Déploiement avec gh-pages (automatique)

```powershell
cd "c:\Projet360 IA work"
npm install --save-dev gh-pages
```

Ajoutez ce script dans `package.json` (section "scripts") :

```json
"deploy": "npm run build && gh-pages -d dist"
```

Puis déployez :

```powershell
npm run deploy
```

Allez dans **Settings > Pages** et sélectionnez la branche **gh-pages**

## Étape 5 : Accéder à votre site

Après quelques minutes, votre site sera disponible à :

```
https://VOTRE-USERNAME.github.io/VOTRE-REPO/
```

## 📝 Notes importantes

- Le déploiement prend 2-5 minutes
- Si vous voyez une erreur 404, attendez quelques minutes
- Pour mettre à jour : faites un nouveau `npm run build` puis poussez les changements
- Le fichier `.nojekyll` dans `dist/` est nécessaire pour que GitHub Pages fonctionne correctement

## 🔄 Mise à jour du site

Après avoir fait des modifications :

```powershell
cd "c:\Projet360 IA work"
npm run build
git add .
git commit -m "Update site"
git push
```

Ou avec gh-pages :

```powershell
npm run deploy
```

## ⚠️ Dépannage

**Problème : Le site ne s'affiche pas correctement**
- Vérifiez que `base: './'` est bien dans `vite.config.ts`
- Assurez-vous que le fichier `.nojekyll` existe dans `dist/`

**Problème : 404 sur les ressources**
- Vérifiez que vous avez bien build le projet avant de pousser
- Vérifiez les chemins dans la console du navigateur (F12)

**Problème : Les images 360 ne chargent pas**
- Les images doivent être dans le dossier `public/` de votre projet
- Elles seront automatiquement copiées dans `dist/` lors du build
