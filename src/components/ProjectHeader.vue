<template>
  <div class="project-header">
    <div class="header-content">
      <h2>{{ projectStore.project?.name }}</h2>
      <p>{{ projectStore.project?.description }}</p>
    </div>
    
    <div class="header-actions">
      <button @click="backToHome" class="btn-small" title="Retour à l'accueil">🏠 Accueil</button>
      <button @click="saveProject" class="btn-small btn-save" title="Sauvegarder le projet">💾 Sauvegarder le projet</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from '../stores/projectStore'

const projectStore = useProjectStore()

const backToHome = () => {
  projectStore.project = null
}

const saveProject = () => {
  if (!projectStore.project) return
  
  // Créer le JSON du projet
  const projectData = JSON.stringify(projectStore.project, null, 2)
  
  // Créer un blob et télécharger
  const blob = new Blob([projectData], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${projectStore.project.name}.json`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.project-header {
  padding: 20px;
  border-bottom: 1px solid #ddd;
  background: white;
}

.header-content h2 {
  margin: 0;
  color: #333;
  font-size: 18px;
}

.header-content p {
  margin: 5px 0 0 0;
  color: #999;
  font-size: 12px;
}

.header-actions {
  display: flex;
  gap: 8px;
  margin-top: 15px;
}

.btn-small {
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}

.btn-small:hover {
  background: #e0e0e0;
}

.btn-save {
  background: #4caf50;
  color: white;
  border-color: #45a049;
  font-weight: 600;
}

.btn-save:hover {
  background: #45a049;
}

.settings-menu {
  position: absolute;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 100;
  min-width: 150px;
}

.menu-item {
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 15px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}

.menu-item:hover {
  background: #f5f5f5;
}

.menu-item.danger {
  color: #d32f2f;
}
</style>
