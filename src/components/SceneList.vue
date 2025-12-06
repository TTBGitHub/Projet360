<template>
  <div class="scene-list">
    <div class="list-header">
      <h3>Scènes</h3>
      <button @click="showAddScene = true" class="btn-add" title="Ajouter une scène">➕</button>
    </div>
    
    <div class="scenes-container">
      <div 
        v-for="scene in projectStore.allScenes"
        :key="scene.id"
        :class="['scene-item', { active: scene.id === projectStore.activeSceneId }]"
      >
        <div class="scene-thumbnail" @click="selectScene(scene.id)" @contextmenu.prevent="showContextMenu($event, scene.id)">
          <img v-if="scene.imageUrl" :src="scene.imageUrl" :alt="scene.name" />
          <div v-else class="no-image">
            <span>📸</span>
            <p>Image manquante</p>
          </div>
        </div>
        <div class="scene-info" @click="selectScene(scene.id)">
          <div class="scene-name">{{ scene.name }}</div>
          <div class="scene-hotspots">{{ scene.hotspots.length }} points</div>
        </div>
        <!-- Re-upload button if image is missing -->
        <button 
          v-if="!scene.imageUrl"
          @click.stop="triggerImageUpload(scene.id)"
          class="btn-reupload"
          title="Re-uploader l'image"
        >
          📤
        </button>
      </div>
      
      <!-- Hidden file input for re-upload -->
      <input 
        ref="reuploadInput"
        type="file"
        accept="image/*"
        style="display: none"
        @change="handleReuploadImage"
      />
    </div>
    
    <!-- Context menu -->
    <div v-if="contextMenu" class="context-menu" :style="contextMenu">
      <button @click="renameSceneModal(contextMenu.sceneId)" class="menu-item">✏️ Renommer</button>
      <button @click="deleteScene(contextMenu.sceneId)" class="menu-item danger">🗑️ Supprimer</button>
    </div>
    
    <!-- Add Scene Modal -->
    <div v-if="showAddScene" class="modal-overlay" @click.self="showAddScene = false">
      <div class="modal">
        <h3>Ajouter une Scène 360°</h3>
        
        <input 
          v-model="newSceneName" 
          type="text" 
          placeholder="Nom de la scène"
          class="input"
        />
        
        <textarea 
          v-model="newSceneDescription" 
          placeholder="Description"
          class="input"
          rows="2"
        ></textarea>
        
        <div class="upload-area" @drop="handleDrop" @dragover.prevent>
          <input 
            ref="fileInput"
            type="file" 
            accept="image/*"
            @change="handleImageUpload"
            style="display: none"
          />
          <button @click="fileInput?.click()" class="upload-btn">
            📸 Sélectionner Image 360°
          </button>
          <p v-if="imagePreview" class="preview-text">✓ Image chargée</p>
        </div>
        
        <div class="modal-actions">
          <button @click="showAddScene = false" class="btn-secondary">Annuler</button>
          <button @click="addScene" :disabled="!newSceneName || !imagePreview" class="btn-primary">Ajouter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useProjectStore } from '../stores/projectStore'
import { blobToDataUrl } from '../utils/helpers'

const projectStore = useProjectStore()
const showAddScene = ref(false)
const newSceneName = ref('')
const newSceneDescription = ref('')
const imagePreview = ref('')
const imageFileName = ref('')
const fileInput = ref<HTMLInputElement>()
const reuploadInput = ref<HTMLInputElement>()
const contextMenu = ref<any>(null)
const reuploadSceneId = ref<string>('')

const selectScene = (sceneId: string) => {
  projectStore.setActiveScene(sceneId)
  contextMenu.value = null
}

const addScene = async () => {
  if (!newSceneName.value || !imagePreview.value) return
  
  console.log('Adding scene:', newSceneName.value)
  projectStore.addScene(newSceneName.value, newSceneDescription.value, imagePreview.value, imageFileName.value)
  
  // Reset form
  showAddScene.value = false
  newSceneName.value = ''
  newSceneDescription.value = ''
  imagePreview.value = ''
  imageFileName.value = ''
}

const handleImageUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return
  
  imageFileName.value = file.name
  imagePreview.value = await blobToDataUrl(file)
}

const handleDrop = async (event: DragEvent) => {
  const files = event.dataTransfer?.files
  if (!files) return
  
  imageFileName.value = files[0].name
  imagePreview.value = await blobToDataUrl(files[0])
}

const triggerImageUpload = (sceneId: string) => {
  reuploadSceneId.value = sceneId
  reuploadInput.value?.click()
}

const handleReuploadImage = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file || !reuploadSceneId.value) return
  
  const imageUrl = await blobToDataUrl(file)
  const scene = projectStore.allScenes.find(s => s.id === reuploadSceneId.value)
  
  if (scene) {
    scene.imageUrl = imageUrl
    scene.imageFileName = file.name
    scene.updatedAt = Date.now()
    projectStore.project!.updatedAt = Date.now()
    projectStore.addHotspot({ id: '', x: 0, y: 0, type: 'text', content: '' }) // Trigger auto-save
    console.log(`✅ Image re-uploaded for scene: ${scene.name}`)
  }
  
  // Reset
  reuploadSceneId.value = ''
  if (reuploadInput.value) {
    reuploadInput.value.value = ''
  }
}

const showContextMenu = (event: MouseEvent, sceneId: string) => {
  contextMenu.value = {
    left: event.clientX + 'px',
    top: event.clientY + 'px',
    sceneId
  }
}

const renameSceneModal = async (sceneId: string) => {
  const scene = projectStore.allScenes.find(s => s.id === sceneId)
  if (!scene) return
  
  const newName = prompt('Nouveau nom:', scene.name)
  if (newName) {
    console.log('Renaming scene to:', newName)
    projectStore.renameScene(sceneId, newName)
  }
  contextMenu.value = null
}

const deleteScene = async (sceneId: string) => {
  if (confirm('Supprimer cette scène?')) {
    console.log('Deleting scene:', sceneId)
    projectStore.deleteScene(sceneId)
  }
  contextMenu.value = null
}

// Fermer context menu au click
document.addEventListener('click', () => {
  contextMenu.value = null
})
</script>

<style scoped>
.scene-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

.list-header h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

.btn-add {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 0;
}

.scenes-container {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.scene-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
  gap: 8px;
}

.scene-item:hover {
  background: #f5f5f5;
}

.scene-item.active {
  background: #e3f2fd;
  border-color: #0066cc;
}

.btn-reupload {
  background: #ff9800;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
  flex-shrink: 0;
}

.btn-reupload:hover {
  background: #f57c00;
  transform: scale(1.05);
}

.scene-thumbnail {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 10px;
  flex-shrink: 0;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scene-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.scene-thumbnail .no-image {
  text-align: center;
  color: #999;
  font-size: 12px;
}

.scene-thumbnail .no-image span {
  display: block;
  font-size: 20px;
  margin-bottom: 2px;
}

.scene-info {
  flex: 1;
  min-width: 0;
}

.scene-name {
  font-size: 13px;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.scene-hotspots {
  font-size: 12px;
  color: #999;
  margin-top: 2px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  border-radius: 12px;
  padding: 30px;
  min-width: 400px;
  max-width: 500px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
}

.modal h3 {
  margin-top: 0;
  color: #333;
}

.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
}

.input:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.upload-area {
  border: 2px dashed #ddd;
  border-radius: 6px;
  padding: 20px;
  text-align: center;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all 0.2s;
}

.upload-area:hover {
  border-color: #0066cc;
  background: #f5f8ff;
}

.upload-btn {
  background: #0066cc;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.preview-text {
  margin: 10px 0 0 0;
  color: #4caf50;
  font-size: 12px;
}

.modal-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.btn-secondary, .btn-primary {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.btn-secondary {
  background: #f0f0f0;
  color: #333;
}

.btn-primary {
  background: #0066cc;
  color: white;
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.context-menu {
  position: fixed;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  z-index: 1001;
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
  font-size: 13px;
}

.menu-item:hover {
  background: #f5f5f5;
}

.menu-item.danger {
  color: #d32f2f;
}
</style>
