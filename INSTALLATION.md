# 📦 Instructions d'Installation

## Pré-requis

Vous devez installer **Node.js** avant de continuer.

### Étape 1 : Installer Node.js

1. Allez sur https://nodejs.org/
2. Téléchargez la version **LTS** (Long Term Support)
3. Exécutez l'installateur et suivez les étapes
4. À la fin de l'installation, **redémarrez votre ordinateur**
5. Ouvrez un nouveau PowerShell (ou CMD)

### Étape 2 : Vérifier l'installation

Ouvrez PowerShell et tapez :

```powershell
node --version
npm --version
```

Vous devriez voir les numéros de version affichés.

### Étape 3 : Installer les dépendances du projet

Ouvrez PowerShell dans le dossier du projet et tapez :

```powershell
npm install
```

Cela va télécharger et installer toutes les dépendances.

### Étape 4 : Lancer le projet

```powershell
npm run dev
```

Le navigateur devrait s'ouvrir automatiquement sur http://localhost:5173

## Dépannage

### "npm: Le terme 'npm' n'est pas reconnu"
→ Node.js n'est pas installé correctement. Réinstallez et redémarrez.

### Port 5173 déjà utilisé
→ Changez le port dans `vite.config.ts` ou arrêtez l'application utilisant ce port.

### Erreurs de build
→ Supprimez `node_modules` et `package-lock.json`, puis refaites `npm install`

## Prochaines étapes

Une fois `npm run dev` lancé :

1. Créez un nouveau projet
2. Ajoutez une scène avec une image 360°
3. Ajoutez des hotspots
4. Visualisez en 360°
5. Exportez votre travail

Enjoy! 🎉
