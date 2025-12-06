# 360° Scene Editor

Un éditeur complet pour créer des scènes interactives 360° avec points d'intérêt cliquables, inspiré par ThingLink.

## Fonctionnalités

### ✨ Éditeur Principal
- **Import d'images 360°** : Importez des images équirectangulaires pour créer des scènes
- **Éditeur de hotspots** : Ajoutez des points d'intérêt directement sur l'image
- **7 types de contenu** :
  - 📝 Texte simple
  - 🖼️ Image
  - 📋 Texte avec image
  - 🎥 Vidéo
  - 🔗 Lien externe
  - 📱 IFrame (contenu embarqué)
  - 🔄 Lien vers une autre scène 360°

### 🎬 Gestion Multi-Scènes
- Créez plusieurs scènes interconnectées
- Navigation drag-and-drop entre scènes
- Miniatures avec aperçu
- Renommage et suppression de scènes

### 👁️ Visionneur Immersif 360°
- Visualisation en temps réel avec Three.js
- Contrôles à la souris pour naviguer
- Clavier : Flèches pour ajustement fin
- Zoom : Scroll de la souris
- Affichage des hotspots interactifs

### 💾 Gestion de Projets
- Sauvegarde automatique dans localStorage
- Chargement du dernier projet
- Import/Export en JSON
- Liste des projets récents

### 📤 Export
- **JSON** : Pour réimporter et continuer l'édition
- **HTML Standalone** : Un fichier unique avec visionneur intégré, prêt à partager
- Package complet : Bientôt disponible

## Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

## Structure du Projet

```
src/
├── components/
│   ├── App.vue                 # Composant racine
│   ├── HomeScreen.vue          # Écran d'accueil
│   ├── ProjectHeader.vue       # En-tête du projet
│   ├── SceneList.vue           # Liste des scènes
│   ├── SceneEditor.vue         # Éditeur principal
│   ├── SceneViewer.vue         # Visionneur 360°
│   └── ExportPanel.vue         # Panel d'export
├── stores/
│   └── projectStore.ts         # Store Pinia pour gestion d'état
├── types/
│   └── index.ts                # Types TypeScript
└── utils/
    ├── helpers.ts              # Fonctions utilitaires
    ├── storage.ts              # Gestion localStorage
    └── exporter.ts             # Export de projets
```

## Utilisation

### Créer un Projet
1. Cliquez sur "Nouveau Projet"
2. Entrez un nom et une description
3. Cliquez sur "Créer"

### Ajouter une Scène
1. Dans la barre latérale, cliquez sur "➕" dans la section Scènes
2. Entrez un nom pour la scène
3. Déposez ou sélectionnez une image 360° (format équirectangulaire)
4. Cliquez sur "Ajouter"

### Ajouter des Hotspots
1. Dans l'onglet "Éditeur", sélectionnez "➕ Ajouter Point"
2. Cliquez sur l'image pour placer un hotspot
3. Configurez le type et le contenu dans le panneau de droite
4. Cliquez sur "💾 Enregistrer"

### Visualiser
1. Cliquez sur l'onglet "👁️ Visionneur"
2. Utilisez la souris pour naviguer dans la scène 360°
3. Cliquez sur les hotspots pour voir le contenu

### Exporter
1. Cliquez sur l'onglet "💾 Exporter"
2. Choisissez le format d'export
3. Le fichier sera téléchargé automatiquement

## Technologies Utilisées

- **Vue.js 3** : Framework frontend
- **Three.js** : Rendu 3D et visualisation 360°
- **Pinia** : Gestion d'état
- **TypeScript** : Typage fort
- **Vite** : Build tool moderne
- **LocalStorage API** : Persistance des données

## Formats Supportés

### Images
- JPEG, PNG, WebP (équirectangulaires)
- Formats standard 360° 2:1 aspect ratio

### Export HTML Standalone
- Fichier unique autosuffisant
- Aucune dépendance externe
- Compatible avec tous les navigateurs modernes

## Considérations Techniques

### Performance
- Optimisation Three.js avec LOD
- Lazy loading des images
- Compression des exports

### Compatibilité
- Chrome, Firefox, Safari, Edge (versions modernes)
- Support mobile en amélioration

### Limites Actuelles
- Pas de support audio intégré
- Package zip en développement
- Pas d'authentification multi-utilisateur

## Améliorations Futures

- [ ] Support du format Cubemap
- [ ] Édition avancée des hotspots (déplacement au drag-drop)
- [ ] Animations et transitions
- [ ] Collaboration en temps réel
- [ ] Statistiques et analytics
- [ ] Support du 3D/GeoJSON
- [ ] Intégration avec CDN pour assets

## Licence

MIT

## Support

Pour les bugs ou suggestions, veuillez créer une issue dans le repository.
