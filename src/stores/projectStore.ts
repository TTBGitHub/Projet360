import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { Project, Scene360, Hotspot } from '../types/index'
import { generateId } from '../utils/helpers'
import { StorageManager } from '../utils/storage'

export const useProjectStore = defineStore('project', () => {
  const project = ref<Project | null>(null)
  const activeSceneId = ref<string>('')

  // Auto-save helper
  const autoSave = () => {
    if (!project.value) {
      console.error('❌ Cannot autoSave: project is null')
      return
    }
    
    const projectCopy = JSON.parse(JSON.stringify(project.value))
    console.log(`💾 AUTO-SAVING: ${projectCopy.scenes.length} scenes`)
    StorageManager.saveProject(projectCopy)
  }

  const activeScene = computed(() => {
    if (!project.value) return null
    return project.value.scenes.find(s => s.id === activeSceneId.value)
  })

  const allScenes = computed(() => {
    return project.value?.scenes || []
  })

  // Initialiser un nouveau projet
  const createNewProject = (name: string, description: string = '') => {
    const newProject: Project = {
      id: generateId(),
      name,
      description,
      scenes: [],
      activeSceneId: '',
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
    project.value = newProject
    autoSave()  // Save immediately after creating
    return newProject
  }

  // Charger un projet
  const loadProject = (loadedProject: Project) => {
    project.value = loadedProject
    activeSceneId.value = loadedProject.activeSceneId || ''
  }

  // Ajouter une nouvelle scène
  const addScene = (name: string, description: string, imageUrl: string, imageFileName?: string) => {
    if (!project.value) {
      console.error('❌ Cannot add scene: project is null')
      return null
    }

    const newScene: Scene360 = {
      id: generateId(),
      name,
      description,
      imageUrl,
      imageFileName,
      hotspots: [],
      createdAt: Date.now(),
      updatedAt: Date.now()
    }

    project.value.scenes.push(newScene)
    project.value.updatedAt = Date.now()
    console.log(`✅ Scene added: ${name}. Total in memory: ${project.value.scenes.length} scenes`)
    
    if (!activeSceneId.value) {
      activeSceneId.value = newScene.id
      project.value.activeSceneId = newScene.id
    }
    
    // Force autoSave
    console.log('🔄 Triggering autoSave...')
    autoSave()
    console.log(`📝 After autoSave, project has ${project.value.scenes.length} scenes`)
    
    return newScene
  }

  // Supprimer une scène
  const deleteScene = (sceneId: string) => {
    if (!project.value) return
    
    const index = project.value.scenes.findIndex(s => s.id === sceneId)
    if (index !== -1) {
      project.value.scenes.splice(index, 1)
      project.value.updatedAt = Date.now()
      
      if (activeSceneId.value === sceneId) {
        activeSceneId.value = project.value.scenes[0]?.id || ''
        project.value.activeSceneId = activeSceneId.value
      }
      
      autoSave()
    }
  }

  // Renommer une scène
  const renameScene = (sceneId: string, newName: string) => {
    if (!project.value) return
    
    const scene = project.value.scenes.find(s => s.id === sceneId)
    if (scene) {
      scene.name = newName
      scene.updatedAt = Date.now()
      project.value.updatedAt = Date.now()
      autoSave()
    }
  }

  // Changer la scène active
  const setActiveScene = (sceneId: string) => {
    if (project.value) {
      activeSceneId.value = sceneId
      project.value.activeSceneId = sceneId
      project.value.updatedAt = Date.now()
    }
  }

  // Ajouter un hotspot
  const addHotspot = (hotspot: Hotspot) => {
    if (!activeScene.value) return
    
    activeScene.value.hotspots.push(hotspot)
    activeScene.value.updatedAt = Date.now()
    if (project.value) {
      project.value.updatedAt = Date.now()
      autoSave()
    }
  }

  // Mettre à jour un hotspot
  const updateHotspot = (sceneId: string, hotspotId: string, updates: Partial<Hotspot>) => {
    if (!project.value) return
    
    const scene = project.value.scenes.find(s => s.id === sceneId)
    if (!scene) return
    
    const hotspot = scene.hotspots.find(h => h.id === hotspotId)
    if (hotspot) {
      Object.assign(hotspot, updates)
      scene.updatedAt = Date.now()
      project.value.updatedAt = Date.now()
      autoSave()
    }
  }

  // Supprimer un hotspot
  const deleteHotspot = (sceneId: string, hotspotId: string) => {
    if (!project.value) return
    
    const scene = project.value.scenes.find(s => s.id === sceneId)
    if (!scene) return
    
    const index = scene.hotspots.findIndex(h => h.id === hotspotId)
    if (index !== -1) {
      scene.hotspots.splice(index, 1)
      scene.updatedAt = Date.now()
      project.value.updatedAt = Date.now()
      autoSave()
    }
  }

  return {
    project,
    activeSceneId,
    activeScene,
    allScenes,
    createNewProject,
    loadProject,
    addScene,
    deleteScene,
    renameScene,
    setActiveScene,
    addHotspot,
    updateHotspot,
    deleteHotspot
  }
})
