<template>
  <div class="scene-viewer">
    <div ref="viewerContainer" class="viewer-container"></div>

    <!-- HUD Info -->
    <div class="viewer-hud">
      <div class="hud-info">
        <h3>{{ projectStore.activeScene?.name }}</h3>
        <p>🖱️ Cliquer + glisser pour naviguer | Scroll pour zoomer</p>
      </div>
    </div>

    <!-- Hotspot DOM markers (projected from 3D) - hidden -->
    <!-- Marqueurs masqués intentionnellement -->

    <!-- Modal Hotspot -->
    <div v-if="activeHotspotContent" class="hotspot-modal-overlay" @click.self="closeHotspotModal()">
      <div class="hotspot-modal">
        <button @click="closeHotspotModal()" class="modal-close">✕</button>
        <div class="modal-content">
          <div v-if="activeHotspotContent.type === 'text'">
            <p>{{ activeHotspotContent.content.text }}</p>
          </div>
          <div v-else-if="activeHotspotContent.type === 'image'">
            <h3 v-if="activeHotspotContent.content.imageTitle" style="text-align: center; margin: 0 0 10px 0;">{{ activeHotspotContent.content.imageTitle }}</h3>
            <img :src="activeHotspotContent.content.imageUrl" :alt="activeHotspotContent.content.imageTitle" />
          </div>
          <div v-else-if="activeHotspotContent.type === 'link'">
            <div style="padding: 10px 0;">
              <img :src="'https://www.google.com/s2/favicons?sz=128&domain=' + extractDomain(activeHotspotContent.content.linkUrl)" style="width: 32px; height: 32px; margin-right: 10px; display: inline-block;">
              <a :href="activeHotspotContent.content.linkUrl" target="_blank" rel="noopener noreferrer" style="font-size: 16px; color: #0066cc; text-decoration: underline;">{{ activeHotspotContent.content.title || 'Ouvrir le lien' }}</a>
            </div>
          </div>
          <div v-else-if="activeHotspotContent.type === 'iframe'">
            <h3 v-if="activeHotspotContent.content.imageTitle" style="text-align: center; margin: 0 0 10px 0;">{{ activeHotspotContent.content.imageTitle }}</h3>
            <iframe :src="sanitizeIframeUrl(activeHotspotContent.content.iframeUrl)" frameborder="0" style="width:100%;height:60vh;" allowfullscreen></iframe>
          </div>
          <div v-else-if="activeHotspotContent.type === 'text-image'">
            <h3 v-if="activeHotspotContent.content.title">{{ activeHotspotContent.content.title }}</h3>
            <p v-if="activeHotspotContent.content.text">{{ activeHotspotContent.content.text }}</p>
            <img v-if="activeHotspotContent.content.imageUrl" :src="activeHotspotContent.content.imageUrl" />
          </div>
        </div>
      </div>
    </div>
      <!-- Calibration removed (UI hidden) -->
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue'
import { useProjectStore } from '../stores/projectStore'
import * as THREE from 'three'
import type { Hotspot } from '../types'
import { StorageManager } from '../utils/storage'
import { showToast } from '../utils/helpers'

const projectStore = useProjectStore()
const emit = defineEmits(['equirect-click', 'hotspot-opened', 'hotspot-closed', 'fov-changed'])
// Live alignment offset (degrees). Use the slider in HUD to tweak longitude alignment
const longitudeOffset = ref(90)
const viewerContainer = ref<HTMLDivElement | null>(null)
const activeHotspotContent = ref<Hotspot | null>(null)

// Safe URL helper for iframe hotspots
const sanitizeIframeUrl = (raw: string | undefined | null) => {
  if (!raw) return ''
  let trimmed = String(raw).trim()
  if (!trimmed) return ''

  // If the input looks like HTML with an iframe tag, extract the src attribute
  if (trimmed.includes('<iframe')) {
    const srcMatch = trimmed.match(/src=['"]([^'"]+)['"]/i)
    if (srcMatch && srcMatch[1]) {
      trimmed = srcMatch[1]
    }
  }

  // block javascript: and data: scripts for safety
  const lowered = trimmed.toLowerCase()
  if (lowered.startsWith('javascript:') || lowered.startsWith('data:')) return ''

  try {
    // If it's already a valid absolute URL, return its href encoded
    const u = new URL(trimmed)
    return encodeURI(u.href)
  } catch (e) {
    // Try adding https:// prefix
    try {
      const u2 = new URL('https://' + trimmed)
      return encodeURI(u2.href)
    } catch (e2) {
      // As a last resort attempt to encode the input
      try { return encodeURI(trimmed) } catch { return '' }
    }
  }
}

const extractDomain = (url: string): string => {
  try {
    const urlObj = new URL(url.startsWith('http') ? url : 'https://' + url)
    return urlObj.hostname || ''
  } catch {
    return 'example.com'
  }
}

const sceneImage = ref<HTMLImageElement | null>(null)
const showCalibration = ref(false)
const hotspotDeltas = reactive<Record<string, { dx: number; dy: number; style: Record<string,string> }>>({})
const calibrationSelectedId = ref<string | null>(null)
const previewTransforms = reactive<Record<string, THREE.Quaternion>>({})
const previewMode = ref(false)
const currentFov = ref(75) // Exposer le FOV actuel pour adapter la taille des hotspots

// Three.js
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let renderer: THREE.WebGLRenderer | null = null
let raycaster = new THREE.Raycaster()
let mouse = new THREE.Vector2()
const hotspotObjects = new Map<string, THREE.Mesh>()
let sphereMesh: THREE.Mesh | null = null

// Controls (lon/lat style)
let lon = 0 // horizontal angle in degrees
let lat = 0 // vertical angle in degrees
let velocityLon = 0
let velocityLat = 0
let isPointerDown = false
let pointerStartX = 0
let pointerStartY = 0
let lastPointerX = 0
let lastPointerY = 0

// Tweakable UX constants
const POINTER_SENSITIVITY = 0.09 // decreased (halved) per user request
const INERTIA_DAMPING = 0.92 // lower = quicker stop, higher = longer glide


const initThree = () => {
  if (!viewerContainer.value) return

  scene = new THREE.Scene()
  const width = viewerContainer.value.clientWidth || 800
  const height = viewerContainer.value.clientHeight || 600

  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000)
  camera.position.set(0, 0, 0.1)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio || 1)
  renderer.setClearColor(0x000000)

  // append
  viewerContainer.value.appendChild(renderer.domElement)

  // load panorama
  loadPanorama()

  // events
  renderer.domElement.addEventListener('pointerdown', onPointerDown)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
  window.addEventListener('wheel', onWheel, { passive: false })
  renderer.domElement.addEventListener('click', onCanvasClick)
  window.addEventListener('resize', onWindowResize)

  animate()
}

const loadPanorama = () => {
  if (!projectStore.activeScene?.imageUrl || !scene) return
  
  const imageUrl = projectStore.activeScene.imageUrl
  console.log('loadPanorama: Loading image, URL length:', imageUrl?.length)
  
  const loader = new THREE.TextureLoader()
  loader.load(
    imageUrl,
    (tex) => {
      console.log('Texture loaded successfully')
      // remove old
      scene!.children.slice().forEach((c) => scene!.remove(c))

      const geometry = new THREE.SphereGeometry(500, 60, 40)
      // Inverse les UVs horizontalement pour corriger la symétrie
      const uvAttribute = geometry.getAttribute('uv')
      for (let i = 0; i < uvAttribute.count; i++) {
        uvAttribute.setX(i, 1 - uvAttribute.getX(i))
      }
      uvAttribute.needsUpdate = true
      
      const material = new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide })
      sphereMesh = new THREE.Mesh(geometry, material)
      scene!.add(sphereMesh)

      rebuildHotspots()
    },
    undefined,
    (err) => {
      console.error('Panorama load error', err)
      // fallback: colored sphere so user sees something
      scene!.children.slice().forEach((c) => scene!.remove(c))
      const geometry = new THREE.SphereGeometry(500, 32, 24)
      const material = new THREE.MeshBasicMaterial({ color: 0x222222, side: THREE.BackSide })
      sphereMesh = new THREE.Mesh(geometry, material)
      scene!.add(sphereMesh)
      rebuildHotspots()
    }
  )
}

const rebuildHotspots = () => {
  if (!scene) return
  // remove old
  for (const m of hotspotObjects.values()) {
    try { scene.remove(m) } catch (e) {}
  }
  hotspotObjects.clear()

  const active = projectStore.activeScene
  if (!active) return

  active.hotspots.forEach((h) => {
    const radius = 500 - 1
    let pos: THREE.Vector3
    if (h.dir && typeof h.dir.x === 'number') {
      pos = new THREE.Vector3(h.dir.x, h.dir.y, h.dir.z).multiplyScalar(radius)
    } else {
      // Convert editor coordinates (x: 0-360 longitude, y: -90..90 latitude)
      // to Three.js spherical coordinates. We apply a configurable longitude
      // offset (degrees) so the editor and viewer can be aligned precisely.
      const phi = THREE.MathUtils.degToRad(90 - h.y)
      const theta = THREE.MathUtils.degToRad(-h.x + longitudeOffset.value)
      pos = new THREE.Vector3().setFromSpherical(new THREE.Spherical(radius, phi, theta))
    }

    // If a preview transform exists for this hotspot, apply it to show preview
    if (previewMode.value && previewTransforms[h.id]) {
      pos.applyQuaternion(previewTransforms[h.id])
    }

    const geom = new THREE.SphereGeometry(Math.max(2, h.radius / 5), 12, 12)
    const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(h.color) })
    const mesh = new THREE.Mesh(geom, mat)
    mesh.position.copy(pos)
    mesh.userData = { hotspotId: h.id }
    scene!.add(mesh)
    hotspotObjects.set(h.id, mesh)
  })
}

const projectToScreen = (v: THREE.Vector3) => {
  if (!camera || !renderer) return { left: '-9999px', top: '-9999px', display: 'none' }
  
  // Vérifier si le point est en avant de la caméra
  // La direction forward de la caméra est (0, 0, -1) par défaut
  const cameraDirection = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion)
  const toPoint = v.clone().normalize()
  const dotProduct = cameraDirection.dot(toPoint)
  
  // Si le point est derrière la caméra (dot product négatif), le placer à gauche
  if (dotProduct < 0) {
    const canvas = renderer.domElement
    return { left: '10px', top: (canvas.clientHeight / 2 - 15) + 'px' }
  }
  
  const vec = v.clone().project(camera)
  const canvas = renderer.domElement
  const x = (vec.x * 0.5 + 0.5) * canvas.clientWidth
  const y = (-vec.y * 0.5 + 0.5) * canvas.clientHeight
  
  // Vérifier aussi si hors des limites de l'écran
  const isOutOfBounds = x < 0 || x > canvas.clientWidth || y < 0 || y > canvas.clientHeight
  
  if (isOutOfBounds) {
    // Positionner à gauche avec un petit padding, centrer verticalement
    return { left: '10px', top: (canvas.clientHeight / 2 - 15) + 'px' }
  }
  return { left: x + 'px', top: y + 'px' }
}

const getHotspotScreenPosition = (hotspot: Hotspot) => {
  const mesh = hotspotObjects.get(hotspot.id)
  if (mesh && camera && renderer) {
    return projectToScreen(mesh.position)
  }
  // fallback compute from spherical
  if (hotspot.dir && typeof hotspot.dir.x === 'number') {
    const pos = new THREE.Vector3(hotspot.dir.x, hotspot.dir.y, hotspot.dir.z).multiplyScalar(500 - 1)
    return projectToScreen(pos)
  }
  const phi = THREE.MathUtils.degToRad(90 - hotspot.y)
  const theta = THREE.MathUtils.degToRad(-hotspot.x + longitudeOffset.value)
  const pos = new THREE.Vector3().setFromSpherical(new THREE.Spherical(500 - 1, phi, theta))
  return projectToScreen(pos)
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

// Compute hotspot lon/lat in editor coordinate system (0..360, -90..90)
const hotspotLonLat = (h: Hotspot) => {
  if (h.dir && typeof h.dir.x === 'number') {
    const v = new THREE.Vector3(h.dir.x, h.dir.y, h.dir.z)
    const s = new THREE.Spherical().setFromVector3(v)
    const phi = s.phi // 0..pi
    const theta = s.theta // radians
    const y = 90 - THREE.MathUtils.radToDeg(phi)
    const x = -THREE.MathUtils.radToDeg(theta) + longitudeOffset.value
    return { x: ((x % 360) + 360) % 360, y }
  }
  // fallback use stored x/y
  return { x: h.x, y: h.y }
}

// compute deltas and screen position style for overlay badges
const updateHotspotDeltas = () => {
  if (!projectStore.activeScene || !renderer || !camera) return
  const canvas = renderer.domElement
  (projectStore.activeScene.hotspots || []).forEach(h => {
    const hl = hotspotLonLat(h)
    const raw = hl.x - lon
    const dx = ((((raw) % 360) + 540) % 360) - 180 // -180..180 shortest
    const dy = hl.y - lat
    // compute 3D pos for style projection
    let pos3: THREE.Vector3
    if (h.dir && typeof h.dir.x === 'number') {
      pos3 = new THREE.Vector3(h.dir.x, h.dir.y, h.dir.z).multiplyScalar(500 - 1)
    } else {
      const phi = THREE.MathUtils.degToRad(90 - h.y)
      const theta = THREE.MathUtils.degToRad(-h.x + longitudeOffset.value)
      pos3 = new THREE.Vector3().setFromSpherical(new THREE.Spherical(500 - 1, phi, theta))
    }
    if (previewMode.value && previewTransforms[h.id]) {
      pos3.applyQuaternion(previewTransforms[h.id])
    }
    const vec = pos3.clone().project(camera)
    const x = (vec.x * 0.5 + 0.5) * canvas.clientWidth
    const y = (-vec.y * 0.5 + 0.5) * canvas.clientHeight
    hotspotDeltas[h.id] = { dx: Math.round(dx), dy: Math.round(dy), style: { left: x + 'px', top: y + 'px' } }
    
    // Also update hotspot screen positions for rendering
    hotspotScreenPositions[h.id] = getHotspotScreenPosition(h)
  })
}

const openHotspot = (h: Hotspot) => {
  activeHotspotContent.value = h
  emit('hotspot-opened')
}

const closeHotspotModal = () => {
  activeHotspotContent.value = null
  emit('hotspot-closed')
}

// Convert editor x/y (deg) into direction vector using viewer mapping
const vectorFromXY = (xDeg: number, yDeg: number) => {
  const phi = THREE.MathUtils.degToRad(90 - yDeg)
  const theta = THREE.MathUtils.degToRad(-xDeg + 90)
  return new THREE.Vector3().setFromSpherical(new THREE.Spherical(1, phi, theta))
}

// Preview-only: create a quaternion that will rotate a hotspot by dx/dy degrees
const previewCalibrationForHotspot = (hot: Hotspot, dx: number, dy: number) => {
  // rotate hotspot vector so it would be centered (apply opposite of camera move)
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(-dy), THREE.MathUtils.degToRad(dx), 0, 'YXZ'))
  previewTransforms[hot.id] = q
  previewMode.value = true
}

const previewCalibrationForAll = (dx: number, dy: number) => {
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(THREE.MathUtils.degToRad(-dy), THREE.MathUtils.degToRad(dx), 0, 'YXZ'))
  if (!projectStore.activeScene) return
  projectStore.activeScene.hotspots.forEach(h => {
    previewTransforms[h.id] = q
  })
  previewMode.value = true
}

const clearPreviewTransforms = () => {
  for (const k of Object.keys(previewTransforms)) delete previewTransforms[k]
  previewMode.value = false
}

// Commit: permanently apply calibration to stored hotspot data
const commitCalibrationForHotspot = (hot: Hotspot) => {
  if (!projectStore.activeScene) return
  const hl = hotspotLonLat(hot)
  const raw = hl.x - lon
  const dx = ((((raw) % 360) + 540) % 360) - 180
  const dy = hl.y - lat
  const newX = hl.x - dx
  const newY = hl.y - dy
  const normX = ((newX % 360) + 360) % 360
  const dirV = vectorFromXY(normX, newY)
  const dir = { x: dirV.x, y: dirV.y, z: dirV.z }
  projectStore.updateHotspot(projectStore.activeScene.id, hot.id, { dir, x: normX, y: newY })
  delete previewTransforms[hot.id]
  if (projectStore.project) StorageManager.saveProject(projectStore.project)
}

const commitCalibrationForAll = () => {
  if (!projectStore.activeScene) return
  projectStore.activeScene.hotspots.forEach(h => commitCalibrationForHotspot(h))
}

const navigateToScene = (id?: string) => {
  if (!id) return
  projectStore.setActiveScene(id)
  activeHotspotContent.value = null
}

// Pointer controls (simple lon/lat)
const onPointerDown = (e: PointerEvent) => {
  isPointerDown = true
  pointerStartX = e.clientX
  pointerStartY = e.clientY
  lastPointerX = e.clientX
  lastPointerY = e.clientY
}

const onPointerMove = (e: PointerEvent) => {
  if (!isPointerDown) return
  const dx = e.clientX - lastPointerX
  const dy = e.clientY - lastPointerY

  // Apply sensitivity directly to pointer delta so dragging feels faster
  velocityLon = dx * POINTER_SENSITIVITY
  velocityLat = dy * POINTER_SENSITIVITY

  lon += velocityLon
  lat += velocityLat
  lat = Math.max(-85, Math.min(85, lat))

  lastPointerX = e.clientX
  lastPointerY = e.clientY
}

const onPointerUp = () => {
  isPointerDown = false
}

const onWheel = (e: WheelEvent) => {
  e.preventDefault()
  if (!camera) return
  camera.fov = Math.max(30, Math.min(100, camera.fov + e.deltaY * 0.05))
  currentFov.value = camera.fov
  camera.updateProjectionMatrix()
  emit('fov-changed', camera.fov)
}

const onWindowResize = () => {
  if (!viewerContainer.value || !camera || !renderer) return
  const w = viewerContainer.value.clientWidth
  const h = viewerContainer.value.clientHeight
  camera.aspect = w / h
  camera.updateProjectionMatrix()
  renderer.setSize(w, h)
}

const onCanvasClick = (e: MouseEvent) => {
  if (!renderer || !camera) return
  const rect = renderer.domElement.getBoundingClientRect()
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObjects(Array.from(hotspotObjects.values()))
  if (intersects.length > 0) {
    const mesh = intersects[0].object as THREE.Mesh
    const id = mesh.userData?.hotspotId
    if (id) {
      const h = projectStore.activeScene?.hotspots.find(it => it.id === id)
      if (!h) return
      if (showCalibration.value) {
        // select hotspot for calibration
        calibrationSelectedId.value = id
        // recompute deltas immediately
        updateHotspotDeltas()
        showToast('Hotspot sélectionné pour calibration', 'info')
      } else {
        // If it's a scene hotspot, navigate directly without showing modal
        if (h.type === 'scene') {
          navigateToScene(h.content?.linkedSceneId)
        } else {
          activeHotspotContent.value = h
        }
      }
    }
  } else {
    // Clicked empty space: emit equirectangular coordinates + direction vector
    const dir = raycaster.ray.direction.clone().normalize()
    const s = new THREE.Spherical().setFromVector3(dir)
    const phi = s.phi
    const theta = s.theta
    const y = 90 - THREE.MathUtils.radToDeg(phi)
    const x = -THREE.MathUtils.radToDeg(theta) + longitudeOffset.value
    const normX = ((x % 360) + 360) % 360
    emit('equirect-click', { x: normX, y, dir: { x: dir.x, y: dir.y, z: dir.z } })
  }
}

const animate = () => {
  requestAnimationFrame(animate)
  // inertia damping
  velocityLon *= INERTIA_DAMPING
  velocityLat *= INERTIA_DAMPING
  lon += velocityLon
  lat += velocityLat
  lat = Math.max(-85, Math.min(85, lat))

  if (camera) {
    camera.rotation.order = 'YXZ'
    camera.rotation.y = THREE.MathUtils.degToRad(lon)
    camera.rotation.x = THREE.MathUtils.degToRad(lat)
  }

  if (renderer && scene && camera) {
    try {
      if (showCalibration.value) updateHotspotDeltas()
      renderer.render(scene, camera)
    } catch (e) {
      console.error('Render error', e)
    }
  }
}

// Preview and commit wrapper functions for UI
const previewSelected = () => {
  if (!calibrationSelectedId.value || !projectStore.activeScene) {
    showToast('Aucun hotspot sélectionné', 'info')
    return
  }
  const hot = projectStore.activeScene.hotspots.find(h => h.id === calibrationSelectedId.value)
  if (!hot) return
  const hl = hotspotLonLat(hot)
  const raw = hl.x - lon
  const dx = ((((raw) % 360) + 540) % 360) - 180
  const dy = hl.y - lat
  previewCalibrationForHotspot(hot, dx, dy)
  showToast('Aperçu de calibration appliqué', 'info')
}

const commitSelected = () => {
  if (!calibrationSelectedId.value || !projectStore.activeScene) {
    showToast('Aucun hotspot sélectionné', 'info')
    return
  }
  const hot = projectStore.activeScene.hotspots.find(h => h.id === calibrationSelectedId.value)
  if (!hot) return
  commitCalibrationForHotspot(hot)
  showToast('Calibration enregistrée', 'success')
}

const previewAll = () => {
  if (!projectStore.activeScene) return
  const first = projectStore.activeScene.hotspots[0]
  if (!first) return
  const hl = hotspotLonLat(first)
  const raw = hl.x - lon
  const dx = ((((raw) % 360) + 540) % 360) - 180
  const dy = hl.y - lat
  previewCalibrationForAll(dx, dy)
  showToast('Aperçu de calibration (tous) appliqué', 'info')
}

const commitAll = () => {
  commitCalibrationForAll()
  showToast('Calibration (tous) enregistrée', 'success')
}

const cancelPreview = () => {
  clearPreviewTransforms()
  showToast('Aperçu annulé', 'info')
}

// Calibration actions wired to buttons
const clearCalibrationSelection = () => {
  calibrationSelectedId.value = null
}

// Expose getHotspotScreenPosition for editor to use
defineExpose({
  getHotspotScreenPosition,
  currentFov
})

const applySelected = () => {
  if (!calibrationSelectedId.value || !projectStore.activeScene) {
    showToast('Aucun hotspot sélectionné', 'info')
    return
  }
  const hot = projectStore.activeScene.hotspots.find(h => h.id === calibrationSelectedId.value)
  if (!hot) return
  const hl = hotspotLonLat(hot)
  const raw = hl.x - lon
  const dx = ((((raw) % 360) + 540) % 360) - 180
  const dy = hl.y - lat
  applyCalibrationToHotspot(hot, dx, dy)
  if (projectStore.project) StorageManager.saveProject(projectStore.project)
  showToast('Calibration appliquée au hotspot sélectionné', 'success')
  updateHotspotDeltas()
}

const applyAll = () => {
  if (!projectStore.activeScene) return
  // compute average dx/dy from first hotspot or zero
  const first = projectStore.activeScene.hotspots[0]
  if (!first) return
  const hl = hotspotLonLat(first)
  const raw = hl.x - lon
  const dx = ((((raw) % 360) + 540) % 360) - 180
  const dy = hl.y - lat
  applyCalibrationToAll(dx, dy)
  if (projectStore.project) StorageManager.saveProject(projectStore.project)
  showToast('Calibration appliquée à tous les hotspots', 'success')
  updateHotspotDeltas()
}

onMounted(() => {
  initThree()
})

onUnmounted(() => {
  try {
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
    window.removeEventListener('wheel', onWheel)
    window.removeEventListener('resize', onWindowResize)
    renderer?.domElement.removeEventListener('pointerdown', onPointerDown)
    renderer?.domElement.removeEventListener('click', onCanvasClick)
    if (renderer) {
      renderer.dispose()
      ;(renderer as any).forceContextLoss && (renderer as any).forceContextLoss()
    }
  } catch (e) {
    console.warn('Cleanup error', e)
  }
})

// react to scene/hotspots changes
watch(() => projectStore.activeScene?.id, () => {
  // reload panorama
  loadPanorama()
})

watch(() => projectStore.activeScene?.hotspots, () => {
  rebuildHotspots()
}, { deep: true })
</script>

<style scoped>
.scene-viewer {
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
}

.viewer-container {
  width: 100%;
  height: 100%;
}

.viewer-hud {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 30;
  pointer-events: none;
}

.hud-controls {
  margin-top: 8px;
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 8px;
}

.hud-controls input[type="range"] {
  width: 160px;
}

.offset-label {
  color: #fff;
  font-size: 12px;
}

.hotspot-marker {
  position: fixed;
  transform: translate(-50%, -50%);
  z-index: 50;
  cursor: pointer;
}

.marker-dot {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  border: 2px solid;
  transition: filter 0.2s ease;
}

.marker-dot:hover {
  filter: brightness(1.2);
}

.marker-tooltip {
  position: absolute;
  top: 36px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.hotspot-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.hotspot-modal {
  background: white;
  padding: 18px;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  max-height: 80vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.modal-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
}

.modal-content img {
  max-width: 100%;
  max-height: calc(80vh - 100px);
  width: auto;
  height: auto;
  object-fit: contain;
}

.modal-close {
  position: absolute;
  right: 12px;
  top: 12px;
  background: transparent;
  border: none;
  font-size: 18px;
}

/* Calibration overlay styles */
.calib-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 60;
}
.calib-crosshair {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 18px;
  height: 18px;
  transform: translate(-50%, -50%);
  border: 2px solid rgba(255,255,255,0.9);
  border-radius: 50%;
}
.calib-line.horiz { position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: rgba(255,255,255,0.15); }
.calib-line.vert { position: absolute; top: 0; bottom: 0; left: 50%; width: 1px; background: rgba(255,255,255,0.15); }
.calib-info { position: absolute; left: 12px; top: 12px; color: #fff; font-size: 12px; background: rgba(0,0,0,0.35); padding: 6px 8px; border-radius: 6px; pointer-events: none; }
.delta-badge { position: absolute; transform: translate(-50%, -140%); background: rgba(0,0,0,0.7); color: #fff; padding: 4px 6px; border-radius: 4px; font-size: 11px; pointer-events: none; }

</style>
