<template>
  <div class="export-panel">
    <div class="export-container">
      <h2>Exporter le Projet</h2>
      
      <div class="export-preview">
        <h3>Apercu du Projet</h3>
        <div class="project-info">
          <div class="info-row">
            <label>Nom:</label>
            <span>{{ projectStore.project?.name }}</span>
          </div>
          <div class="info-row">
            <label>Scenes:</label>
            <span>{{ projectStore.project?.scenes.length }}</span>
          </div>
          <div class="info-row">
            <label>Hotspots:</label>
            <span>{{ totalHotspots }}</span>
          </div>
          <div class="info-row">
            <label>Taille approx:</label>
            <span>{{ estimatedSize }}</span>
          </div>
        </div>
      </div>
      
      <div class="export-options">
        <div class="export-card">
          <div class="card-icon">📄</div>
          <h3>HTML Standalone</h3>
          <p>Génère un fichier index.html unique à lancer (de préférence avec Chrome pour assurer un maximum de compatibilité).</p>
          <button @click="exportHTML" class="btn-export">Telecharger HTML</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useProjectStore } from '../stores/projectStore'
import { exportAsHTMLStandalone } from '../utils/exporter'

const projectStore = useProjectStore()

const totalHotspots = computed(() => {
  return projectStore.project?.scenes.reduce((sum, scene) => sum + scene.hotspots.length, 0) || 0
})

const estimatedSize = computed(() => {
  if (!projectStore.project) return '0 MB'
  
  const json = JSON.stringify(projectStore.project)
  const bytes = new Blob([json]).size
  const mb = (bytes / 1024 / 1024).toFixed(2)
  return mb + ' MB'
})

const exportHTML = () => {
  if (!projectStore.project) return
  
  const html = exportAsHTMLStandalone(projectStore.project)
  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'index.html'
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.export-panel {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 40px;
  background: #f5f5f5;
}

.export-container {
  max-width: 1000px;
  margin: 0 auto;
}

.export-panel h2 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
}

.export-panel > p {
  color: #666;
  margin-bottom: 40px;
}

.export-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.export-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s;
}

.export-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.card-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.export-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.export-card p {
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1.5;
}

.btn-export {
  padding: 12px 24px;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-export:hover:not(:disabled) {
  background: #0052a3;
  transform: scale(1.05);
}

.btn-export:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

.export-preview {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-bottom: 40px;
}

.export-preview h3 {
  margin-top: 0;
  color: #333;
  margin-bottom: 20px;
}

.project-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 6px;
  border-left: 4px solid #0066cc;
}

.info-row label {
  font-weight: 600;
  color: #666;
  font-size: 14px;
}

.info-row span {
  color: #333;
  font-size: 16px;
  font-weight: 500;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.modal-header h3 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.modal-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  color: #333;
}

.modal-body {
  padding: 30px;
}

.option-group {
  margin-bottom: 25px;
}

.option-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
}

.option-label input[type="radio"] {
  margin-right: 12px;
  cursor: pointer;
  width: 18px;
  height: 18px;
}

.option-desc {
  margin-left: 30px;
  color: #666;
  font-size: 13px;
  margin-bottom: 10px;
}

.path-input {
  margin-left: 30px;
  width: calc(100% - 30px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  font-family: monospace;
}

.path-input:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.folder-selector {
  margin-top: 15px;
}

.path-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  font-family: monospace;
  background: #f9f9f9;
  margin-bottom: 10px;
  cursor: not-allowed;
}

.btn-browse {
  width: 100%;
  padding: 10px;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-browse:hover {
  background: #0052a3;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 20px;
  border-top: 1px solid #eee;
}

.btn-cancel {
  padding: 10px 24px;
  background: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-cancel:hover {
  background: #e0e0e0;
}

.btn-confirm {
  padding: 10px 24px;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-confirm:hover {
  background: #0052a3;
}

.btn-confirm:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
