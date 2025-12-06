<template>
  <div class="scene-editor">
    <div class="editor-canvas">
            <div 
              class="image-container"
              @mousemove="handleMouseMove"
              @contextmenu.prevent="contextMenu = null"
            >
              <SceneViewer v-if="projectStore.activeScene?.imageUrl" ref="sceneViewerRef" @equirect-click="handleViewerClick" @hotspot-opened="activeHotspotFromViewer = true" @hotspot-closed="activeHotspotFromViewer = false" @fov-changed="onFovChanged" />
        
        <!-- Grille de coordonnées -->
        <div class="grid-overlay" :style="{ display: activeHotspotFromViewer ? 'none' : 'block' }">
          <div v-for="i in 37" :key="'h' + i" class="grid-line-h" :style="{ left: (i * 100/36) + '%' }"></div>
          <div v-for="i in 19" :key="'v' + i" class="grid-line-v" :style="{ top: (i * 100/18) + '%' }"></div>
        </div>
        
        <!-- Hotspots affichés -->
        <div 
          v-for="(hotspot, index) in projectStore.activeScene?.hotspots"
          :key="hotspot.id"
          class="hotspot-pin"
          :style="{ ...getHotspotPosition(hotspot), display: activeHotspotFromViewer ? 'none' : 'flex' }"
          @mousedown.stop="handleHotspotMouseDown($event, hotspot)"
          @contextmenu.prevent="() => {}"
          :class="{ selected: selectedHotspotId === hotspot.id }"
          draggable="false"
        >
          <div class="hotspot-icon">{{ getHotspotIcon(hotspot.type) }}</div>
          <div class="hotspot-index">{{ index + 1 }}</div>
        </div>
        
        <!-- Crosshair au cursor -->
        <div v-if="showCrosshair" class="crosshair" :style="{ left: mouseX + 'px', top: mouseY + 'px' }"></div>
      </div>
      
      <!-- Info hotspot sélectionné -->
      <div v-if="selectedHotspot" class="hotspot-info">
        <div class="info-header">
          <h3>Point d'intérêt</h3>
          <button @click="selectedHotspot = null" class="btn-close">✕</button>
        </div>
        
        <div class="info-content">
          <div class="form-group">
            <label>Type</label>
            <select v-model="selectedHotspot.type" class="input">
              <option value="text">📝 Texte</option>
              <option value="image">🖼️ Image</option>
              <option value="text-image">📋 Texte + Image</option>
              <option value="link">🔗 Lien</option>
              <option value="iframe">📱 IFrame</option>
              <option value="scene">🔄 Autre Scène</option>
              <option value="audio">🎵 Musique MP3</option>
            </select>
          </div>
          
          <!-- Contenu selon le type -->
          <template v-if="selectedHotspot.type === 'text'">
            <div class="form-group">
              <label>Texte</label>
              <textarea v-model="selectedHotspot.content.text" class="input" rows="3"></textarea>
            </div>
          </template>
          
          <template v-else-if="selectedHotspot.type === 'image'">
            <div class="form-group">
              <label>Titre (optionnel)</label>
              <input v-model="selectedHotspot.content.imageTitle" type="text" class="input" placeholder="Titre de l'image">
            </div>
            <div class="form-group">
              <label>Image</label>
              <div class="image-upload-group">
                <input 
                  ref="imageFileInput"
                  type="file" 
                  accept="image/*"
                  style="display: none"
                  @change="handleImageSelect"
                >
                <button @click="triggerImageSelect" class="btn-upload">
                  📤 Sélectionner une image
                </button>
                <div v-if="selectedHotspot.content.imageUrl" class="image-preview">
                  <img :src="selectedHotspot.content.imageUrl" :alt="selectedHotspot.content.imageUrl" />
                </div>
              </div>
            </div>
          </template>
          
          <template v-else-if="selectedHotspot.type === 'text-image'">
            <div class="form-group">
              <label>Titre</label>
              <input v-model="selectedHotspot.content.title" type="text" class="input">
            </div>
            <div class="form-group">
              <label>Texte</label>
              <textarea v-model="selectedHotspot.content.text" class="input" rows="2"></textarea>
            </div>
            <div class="form-group">
              <label>Image</label>
              <div class="image-upload-group">
                <input 
                  ref="imageFileInput"
                  type="file" 
                  accept="image/*"
                  style="display: none"
                  @change="handleImageSelect"
                >
                <button @click="triggerImageSelect" class="btn-upload">
                  📤 Sélectionner une image
                </button>
                <div v-if="selectedHotspot.content.imageUrl" class="image-preview">
                  <img :src="selectedHotspot.content.imageUrl" :alt="selectedHotspot.content.imageUrl" />
                </div>
              </div>
            </div>
          </template>
          
          <template v-else-if="selectedHotspot.type === 'link'">
            <div class="form-group">
              <label>URL</label>
              <input v-model="selectedHotspot.content.linkUrl" type="text" class="input" placeholder="https://...">
            </div>
            <div class="form-group">
              <label>Texte du lien</label>
              <input v-model="selectedHotspot.content.title" type="text" class="input" placeholder="Cliquez ici">
            </div>
          </template>
          
          <template v-else-if="selectedHotspot.type === 'iframe'">
            <div class="form-group">
              <label>Titre (optionnel)</label>
              <input v-model="selectedHotspot.content.imageTitle" type="text" class="input" placeholder="Titre du contenu">
            </div>
            <div class="form-group">
              <label>Code IFrame</label>
              <textarea v-model="selectedHotspot.content.iframeUrl" type="text" class="input" rows="4" placeholder="<iframe src='...'></iframe>"></textarea>
            </div>
          </template>
          
          <template v-else-if="selectedHotspot.type === 'scene'">
            <div class="form-group">
              <label>Scène liée</label>
              <select v-model="selectedHotspot.content.linkedSceneId" class="input">
                <option v-for="scene in projectStore.allScenes" :key="scene.id" :value="scene.id">
                  {{ scene.name }}
                </option>
              </select>
            </div>
          </template>
          
          <div class="form-group">
            <label>Taille</label>
            <input v-model.number="selectedHotspot.radius" type="range" min="5" max="30" class="input">
          </div>
          
          <div class="form-group">
            <label>Couleur</label>
            <div class="color-picker-enhanced">
              <input v-model="hotspotColor" type="color" class="color-input-hidden">
              <div class="color-presets">
                <button 
                  v-for="color in presetColors" 
                  :key="color"
                  class="color-preset"
                  :style="{ backgroundColor: color }"
                  :class="{ active: hotspotColor.toLowerCase() === color.toLowerCase() }"
                  @click="hotspotColor = color"
                  :title="color"
                ></button>
              </div>
              <label class="color-picker-wrapper">
                <span class="color-picker-text">Choisir une couleur</span>
                <input v-model="hotspotColor" type="color" class="color-input-picker">
              </label>
            </div>
          </div>
          
          <div class="form-actions">
            <button @click="updateHotspot" class="btn-save">💾 Valider le point d'intérêt</button>
            <button @click="deleteHotspot" class="btn-delete">🗑️ Supprimer le point d'intérêt</button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Barre d'outils -->
    <div class="toolbar">
      <button @click="mode = 'draw'" :class="{ active: mode === 'draw' }" class="tool-btn">
        ➕ Ajouter Point
      </button>
      <button @click="mode = 'select'" :class="{ active: mode === 'select' }" class="tool-btn">
        🔍 Sélectionner
      </button>
    </div>
    
    <!-- Hotspot menu (context) -->
    <div v-if="hotspotMenu" class="context-menu" :style="hotspotMenu.position">
      <button @click="editHotspot(hotspotMenu.hotspot)" class="menu-item">✏️ Éditer</button>
      <button @click="duplicateHotspot(hotspotMenu.hotspot)" class="menu-item">📋 Dupliquer</button>
      <button @click="deleteHotspotDirect(hotspotMenu.hotspot)" class="menu-item danger">🗑️ Supprimer</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import { useProjectStore } from '../stores/projectStore'
import { Hotspot } from '../types/index'
import { ref as vueRef } from 'vue'
import SceneViewer from './SceneViewer.vue'
import { generateId, showToast, blobToDataUrl } from '../utils/helpers'
import * as THREE from 'three'
import { StorageManager } from '../utils/storage'

const projectStore = useProjectStore()
const mode = ref('select')
const showGrid = ref(false)
const showCrosshair = ref(true)
const showCoordinates = ref(false)
const selectedHotspotId = ref('')
const mouseX = ref(0)
const mouseY = ref(0)
const contextMenu = ref(null)
const hotspotMenu = ref<any>(null)
const activeHotspotFromViewer = ref(false)
const sceneImage = vueRef<HTMLImageElement | null>(null)
const sceneViewerRef = vueRef<any>(null)
const updateTick = ref(0)
const hotspotColor = ref('#ff0000')
const imageFileInput = vueRef<HTMLInputElement | null>(null)

// Get current FOV from viewer with fallback
const getCurrentFov = () => {
  if (sceneViewerRef.value?.currentFov?.value) {
    return sceneViewerRef.value.currentFov.value
  }
  return 75
}

// Couleurs préset pour le color picker
const presetColors = [
  '#FF0000', // Rouge
  '#FF6B35', // Orange-rouge
  '#FFA500', // Orange
  '#FFD700', // Or
  '#00FF00', // Vert
  '#00CED1', // Turquoise
  '#0066FF', // Bleu
  '#6B35FF', // Violet
  '#FF00FF', // Magenta
  '#FFFFFF', // Blanc
  '#808080', // Gris
  '#000000', // Noir
]

// Force re-render when FOV changes to update hotspot sizes
const onFovChanged = (newFov: number) => {
  const fovValue = typeof newFov === 'number' ? newFov : 75
  // Store the FOV value to ensure getCurrentFov returns the latest value
  if (sceneViewerRef.value?.currentFov) {
    sceneViewerRef.value.currentFov.value = fovValue
  }
  updateTick.value++
}

// Drag and drop hotspot positioning with Ctrl+left-click
let draggedHotspot: Hotspot | null = null;

const handleHotspotMouseDown = (e: MouseEvent, hotspot: Hotspot) => {
  if (e.button === 0) selectHotspot(hotspot)
}

// compute unit direction vector from equirectangular coordinates using
// the same spherical mapping as the viewer so positions match precisely.
const computeDirFromXY = (xDeg: number, yDeg: number) => {
  const phi = THREE.MathUtils.degToRad(90 - yDeg)
  const theta = THREE.MathUtils.degToRad(-xDeg + 90)
  const v = new THREE.Vector3().setFromSpherical(new THREE.Spherical(1, phi, theta))
  return { x: v.x, y: v.y, z: v.z }
}

const selectedHotspot = computed({
  get: () => {
    if (!projectStore.activeScene) return null
    return projectStore.activeScene.hotspots.find(h => h.id === selectedHotspotId.value)
  },
  set: (value) => {
    selectedHotspotId.value = value?.id || ''
  }
})

// Watcher to sync color when hotspot changes
watch(() => selectedHotspot.value?.color, (newColor) => {
  if (newColor) {
    hotspotColor.value = newColor
  }
})

// Watcher to update hotspot color when color input changes
watch(hotspotColor, (newColor) => {
  if (selectedHotspot.value) {
    selectedHotspot.value.color = newColor
  }
})

const handleCanvasClick = (e: MouseEvent) => {
  if (mode.value !== 'draw') return
  
  // compute click relative to the actual displayed image pixels (handles object-fit:contain)
  const container = (e.currentTarget as HTMLElement)
  const containerRect = container.getBoundingClientRect()

  let px = e.clientX - containerRect.left
  let py = e.clientY - containerRect.top
  let displayedWidth = containerRect.width
  let displayedHeight = containerRect.height

  const img = sceneImage.value
  if (img && img.naturalWidth && img.naturalHeight) {
    const naturalW = img.naturalWidth
    const naturalH = img.naturalHeight
    const scale = Math.min(containerRect.width / naturalW, containerRect.height / naturalH)
    displayedWidth = naturalW * scale
    displayedHeight = naturalH * scale
    const offsetX = (containerRect.width - displayedWidth) / 2
    const offsetY = (containerRect.height - displayedHeight) / 2
    px = e.clientX - containerRect.left - offsetX
    py = e.clientY - containerRect.top - offsetY
  }

  // normalize inside displayed image area
  const u = Math.max(0, Math.min(1, px / displayedWidth))
  const v = Math.max(0, Math.min(1, py / displayedHeight))
  const x = u * 360
  const y = v * 180 - 90
  

  const clampedX = Math.max(0, Math.min(360, x))
  const clampedY = Math.max(-90, Math.min(90, y))

  const newHotspot: Hotspot = {
    id: generateId(),
    type: 'text',
    x: clampedX,
    y: clampedY,
    content: { text: 'Nouveau point' },
    radius: 10,
    color: '#ff0000',
    visible: true,
    dir: computeDirFromXY(clampedX, clampedY)
  }
  
  projectStore.addHotspot(newHotspot)
  if (projectStore.project) {
    StorageManager.saveProject(projectStore.project)
  }
  // Do not show creation toast; user requested confirmation only on explicit save
  selectedHotspot.value = newHotspot
}

const handleViewerClick = (payload: { x: number; y: number; dir: { x: number; y: number; z: number } }) => {
  if (mode.value !== 'draw') return
  const clampedX = Math.max(0, Math.min(360, payload.x))
  const clampedY = Math.max(-90, Math.min(90, payload.y))
  const newHotspot: Hotspot = {
    id: generateId(),
    type: 'text',
    x: clampedX,
    y: clampedY,
    content: { text: 'Nouveau point' },
    radius: 10,
    color: '#ff0000',
    visible: true,
    dir: { x: payload.dir.x, y: payload.dir.y, z: payload.dir.z }
  }

  projectStore.addHotspot(newHotspot)
  if (projectStore.project) {
    StorageManager.saveProject(projectStore.project)
  }
  selectedHotspot.value = newHotspot
}

const handleMouseMove = (e: MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
}

const getHotspotPosition = (hotspot: Hotspot) => {
  const _ = updateTick.value // Establishes Vue dependency
  
  if (sceneViewerRef.value) {
    const screenPos = sceneViewerRef.value.getHotspotScreenPosition(hotspot)
    const fov = getCurrentFov()
    const zoomFactor = fov > 0 ? 75 / fov : 1
    const baseSize = hotspot.radius * 2
    const scaledSize = baseSize * zoomFactor
    
    if (hotspot.id === (projectStore.activeScene?.hotspots[0]?.id)) {
      console.log(`FOV: ${fov}, ZoomFactor: ${zoomFactor}, ScaledSize: ${scaledSize}`)
    }
    
    return {
      left: screenPos.left,
      top: screenPos.top,
      width: scaledSize + 'px',
      height: scaledSize + 'px',
      background: hotspot.color,
      transform: 'translate(-50%, -50%)'
    }
  }
  
  // Fallback to percentage-based positioning (static)
  const x = (hotspot.x / 360) * 100
  const y = ((hotspot.y + 90) / 180) * 100
  return {
    left: x + '%',
    top: y + '%',
    width: hotspot.radius * 2 + 'px',
    height: hotspot.radius * 2 + 'px',
    background: hotspot.color,
    display: 'none',  // hide static fallback when viewer is active
    transform: 'translate(-50%, -50%)'
  }
}

const getHotspotIcon = (type: string) => {
  const icons: Record<string, string> = {
    text: '📝',
    image: '🖼️',
    'text-image': '📋',
    link: '🔗',
    iframe: '📱',
    scene: '🔄'
  }
  return icons[type] || '📍'
}

const selectHotspot = (hotspot: Hotspot) => {
  selectedHotspot.value = hotspot
}

const showHotspotMenu = (e: MouseEvent, hotspot: Hotspot) => {
  hotspotMenu.value = {
    hotspot,
    position: {
      left: e.clientX + 'px',
      top: e.clientY + 'px'
    }
  }
}

const editHotspot = (hotspot: Hotspot) => {
  selectedHotspot.value = hotspot
  hotspotMenu.value = null
}

const duplicateHotspot = (hotspot: Hotspot) => {
  const duplicate: Hotspot = {
    ...hotspot,
    id: generateId(),
    x: hotspot.x + 10,
    y: hotspot.y + 10
  }
  projectStore.addHotspot(duplicate)
  if (projectStore.project) {
    StorageManager.saveProject(projectStore.project)
  }
  hotspotMenu.value = null
}

const deleteHotspotDirect = (hotspot: Hotspot) => {
  if (projectStore.activeScene) {
    projectStore.deleteHotspot(projectStore.activeScene.id, hotspot.id)
    if (projectStore.project) {
      StorageManager.saveProject(projectStore.project)
    }
  }
  hotspotMenu.value = null
}

const updateHotspot = () => {
  if (selectedHotspot.value && projectStore.activeScene) {
    // Recompute direction vector from modified x/y so viewer stays in sync.
    const updates = { ...selectedHotspot.value, dir: computeDirFromXY(selectedHotspot.value.x, selectedHotspot.value.y) }
    projectStore.updateHotspot(projectStore.activeScene.id, selectedHotspot.value.id, updates)
    if (projectStore.project) {
      StorageManager.saveProject(projectStore.project)
    }
    showToast('✅ Point d\'intérêt enregistré!', 'success')
  }
}

const deleteHotspot = () => {
  if (selectedHotspot.value && projectStore.activeScene) {
    projectStore.deleteHotspot(projectStore.activeScene.id, selectedHotspot.value.id)
    selectedHotspot.value = null
    if (projectStore.project) {
      StorageManager.saveProject(projectStore.project)
    }
    showToast('🗑️ Point d\'intérêt supprimé!', 'success')
  }
}

const triggerImageSelect = () => {
  imageFileInput.value?.click()
}

const handleImageSelect = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file || !selectedHotspot.value) return
  
  try {
    const imageUrl = await blobToDataUrl(file)
    selectedHotspot.value.content.imageUrl = imageUrl
    
    if (projectStore.activeScene) {
      projectStore.updateHotspot(projectStore.activeScene.id, selectedHotspot.value.id, selectedHotspot.value)
      if (projectStore.project) {
        StorageManager.saveProject(projectStore.project)
      }
    }
    
    showToast('✅ Image chargée!', 'success')
  } catch (error) {
    console.error('Erreur lors du chargement de l\'image:', error)
    showToast('❌ Erreur lors du chargement de l\'image', 'error')
  }
}


// Auto-update marker positions when viewer moves (sync with three.js animation loop)
let animationFrameId: number | null = null
const startPositionSync = () => {
  const sync = () => {
    updateTick.value++ // trigger re-render
    animationFrameId = requestAnimationFrame(sync)
  }
  animationFrameId = requestAnimationFrame(sync)
}
const stopPositionSync = () => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
}

// Watch for viewer ref changes and start syncing
watch(() => sceneViewerRef.value, (newVal) => {
  if (newVal) {
    startPositionSync()
  } else {
    stopPositionSync()
  }
})

// Cleanup on unmount
onUnmounted(() => {
  stopPositionSync()
})

// Fermer les menus
document.addEventListener('click', () => {
  hotspotMenu.value = null
})
</script>

<style scoped>
.scene-editor {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.editor-canvas {
  flex: 1;
  display: flex;
  overflow: hidden;
  gap: 10px;
  padding: 10px;
  background: #f5f5f5;
}

.image-container {
  flex: 1;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
  background: #000;
  cursor: crosshair;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  pointer-events: none;
}

.image-container.show-grid .grid-overlay {
  display: block;
}

.grid-line-h, .grid-line-v {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.grid-line-h {
  width: 1px;
  height: 100%;
}

.grid-line-v {
  height: 1px;
  width: 100%;
}

.hotspot-pin {
  position: absolute;
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 50%;
  background: rgba(255, 0, 0, 0.5);
  transition: all 0.2s;
  font-size: 10px;
  font-weight: bold;
  user-select: none;
}

.hotspot-pin:hover {
  filter: brightness(1.2);
  background: rgba(255, 0, 0, 0.8);
  cursor: grab;
}

.hotspot-pin:active {
  cursor: grabbing;
}

.hotspot-pin.selected {
  border-color: #0066cc;
  box-shadow: 0 0 15px rgba(0, 102, 204, 0.5);
}

.hotspot-icon {
  position: absolute;
  font-size: 12px;
}

.hotspot-index {
  position: absolute;
  bottom: -15px;
  font-size: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  padding: 2px 6px;
  border-radius: 3px;
}

.crosshair {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.hotspot-info {
  width: 350px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.info-header h3 {
  margin: 0;
  font-size: 16px;
}

.btn-close {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
}

.info-content {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #666;
}

.input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 13px;
  font-family: inherit;
}

.color-picker-wrapper {
  display: flex;
  gap: 10px;
  align-items: center;
}

.color-input {
  flex: 1;
  min-height: 38px;
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.color-preview {
  width: 50px;
  height: 38px;
  border: 2px solid #ddd;
  border-radius: 4px;
  flex-shrink: 0;
}

.color-picker-enhanced {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.color-input-hidden {
  display: none;
}

.color-input-picker {
  width: 100%;
  height: 50px;
  border: 2px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: border-color 0.2s;
}

.color-input-picker:hover {
  border-color: #999;
}

.color-picker-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.color-picker-label .color-input-picker {
  flex-shrink: 0;
  width: auto;
  height: 40px;
  padding: 2px;
}

.color-picker-text {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  flex: 1;
  line-height: 50px;
  margin-right: 20px;
}

.color-picker-wrapper .color-input-picker {
  width: 50px;
  height: 50px;
  min-width: 50px;
  flex-shrink: 0;
  padding: 2px;
  border: 2px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
}

.color-picker-wrapper .color-input-picker:hover {
  border-color: #666;
}

.color-presets {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 6px;
}

.color-preset {
  width: 100%;
  aspect-ratio: 1;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 0;
}

.color-preset:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.color-preset.active {
  border-color: #333;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  transform: scale(1.05);
}

.input:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.form-actions {
  display: flex;
  gap: 10px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.btn-save, .btn-delete {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
}

.btn-save {
  background: #4caf50;
  color: white;
}

.btn-delete {
  background: #f44336;
  color: white;
}

.toolbar {
  display: flex;
  gap: 10px;
  padding: 10px;
  background: white;
  border-top: 1px solid #ddd;
  align-items: center;
}

.tool-btn {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;
}

.tool-btn:hover {
  background: #f5f5f5;
}

.tool-btn.active {
  background: #0066cc;
  color: white;
  border-color: #0066cc;
}

.tool-label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  cursor: pointer;
}

.context-menu, .context-menu {
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

.image-upload-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn-upload {
  padding: 8px 16px;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s;
}

.btn-upload:hover {
  background: #0052a3;
}

.btn-upload:active {
  transform: scale(0.95);
}

.image-preview {
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  max-height: 200px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-preview img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.help-text {
  font-size: 12px;
  color: #666;
  margin-top: 6px;
  font-style: italic;
}
</style>
