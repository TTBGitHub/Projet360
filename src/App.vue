<template>
  <div class="app-container">
    <!-- Toasts -->
    <div class="toasts-container">
      <div 
        v-for="toast in toasts"
        :key="toast.id"
        :class="['toast', `toast-${toast.type}`]"
      >
        {{ toast.message }}
      </div>
    </div>
    
    <template v-if="!projectStore.project">
      <HomeScreen @create-project="createProject" @load-project="loadProject" />
    </template>
    <template v-else>
      <div class="editor-layout">
        <div class="sidebar">
          <ProjectHeader />
          <SceneList />
        </div>
        
        <div class="main-content">
          <div class="editor-tabs">
            <button 
              :class="{ active: currentTab === 'editor' }"
              @click="currentTab = 'editor'"
              class="tab-btn"
            >
              ✏️ Éditeur
            </button>
            <button 
              :class="{ active: currentTab === 'viewer' }"
              @click="currentTab = 'viewer'"
              class="tab-btn"
            >
              👁️ Visionneur
            </button>
            <button 
              :class="{ active: currentTab === 'export' }"
              @click="currentTab = 'export'"
              class="tab-btn"
            >
              💾 Exporter
            </button>
          </div>
          
          <template v-if="currentTab === 'editor'">
            <SceneEditor v-if="projectStore.activeScene" />
          </template>
          
          <template v-else-if="currentTab === 'viewer'">
            <SceneViewer v-if="projectStore.activeScene" />
          </template>
          
          <template v-else-if="currentTab === 'export'">
            <ExportPanel />
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useProjectStore } from './stores/projectStore'
import { StorageManager } from './utils/storage'
import { toasts } from './utils/helpers'
import HomeScreen from './components/HomeScreen.vue'
import ProjectHeader from './components/ProjectHeader.vue'
import SceneList from './components/SceneList.vue'
import SceneEditor from './components/SceneEditor.vue'
import SceneViewer from './components/SceneViewer.vue'
import ExportPanel from './components/ExportPanel.vue'

const projectStore = useProjectStore()
const currentTab = ref('editor')

const createProject = (name: string, description: string) => {
  projectStore.createNewProject(name, description)
}

const loadProject = (project: any) => {
  projectStore.loadProject(project)
}

onMounted(async () => {
  // Auto-load the last saved project
  let savedProject = StorageManager.loadProject()
  
  if (savedProject) {
    projectStore.loadProject(savedProject)
    console.log('✓ Project loaded with', savedProject.scenes.length, 'scenes')
  } else {
    console.log('No saved project found')
  }
})
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;
  position: relative;
}

.toasts-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  pointer-events: none;
}

.toast {
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  animation: slideInRight 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
}

@keyframes slideInRight {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast-success {
  background: #4caf50;
  color: white;
}

.toast-error {
  background: #f44336;
  color: white;
}

.toast-info {
  background: #2196f3;
  color: white;
}

.editor-layout {
  display: flex;
  width: 100%;
  height: 100%;
}

.sidebar {
  width: 300px;
  background: #fff;
  border-right: 1px solid #ddd;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.editor-tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
  background: #fff;
  padding: 0;
  gap: 0;
}

.tab-btn {
  padding: 12px 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  transition: all 0.3s;
}

.tab-btn:hover {
  background: #f9f9f9;
  color: #333;
}

.tab-btn.active {
  color: #0066cc;
  border-bottom-color: #0066cc;
}
</style>
