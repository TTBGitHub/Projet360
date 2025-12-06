<template>
  <div class="home-screen">
    <div class="welcome-card">
      <h1>360° Scene Editor</h1>
      <p>Créez des scènes interactives 360° avec des points d'intérêt cliquables</p>
      
      <div class="actions">
        <button @click="showCreateModal = true" class="btn btn-primary">
          ➕ Nouveau Projet
        </button>
        <button @click="triggerImport" class="btn btn-secondary">
          📂 Importer
        </button>
      </div>

      <input 
        ref="fileInput" 
        type="file" 
        accept=".json" 
        style="display: none"
        @change="handleImportFile"
      />
    </div>
    
    <!-- Modal de création -->
    <div v-if="showCreateModal" class="modal-overlay" @click.self="showCreateModal = false">
      <div class="modal">
        <h2>Créer un Nouveau Projet</h2>
        <input 
          v-model="newProjectName" 
          type="text" 
          placeholder="Nom du projet"
          class="input"
          @keyup.enter="handleCreateProject"
        />
        <textarea 
          v-model="newProjectDescription" 
          placeholder="Description (optionnel)"
          class="input"
          rows="3"
        ></textarea>
        <div class="modal-actions">
          <button @click="showCreateModal = false" class="btn btn-secondary">Annuler</button>
          <button @click="handleCreateProject" class="btn btn-primary">Créer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { StorageManager } from '../utils/storage'
import { formatDate } from '../utils/helpers'

const emit = defineEmits<{
  'create-project': [name: string, description: string]
  'load-project': [project: any]
}>()

const showCreateModal = ref(false)
const newProjectName = ref('')
const newProjectDescription = ref('')
const fileInput = ref<HTMLInputElement>()
const savedProject = ref<any>(null)

const handleCreateProject = () => {
  if (!newProjectName.value.trim()) return
  
  emit('create-project', newProjectName.value, newProjectDescription.value)
  showCreateModal.value = false
  newProjectName.value = ''
  newProjectDescription.value = ''
}

const triggerImport = () => {
  fileInput.value?.click()
}

const handleImportFile = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return
  
  const reader = new FileReader()
  reader.onload = (e) => {
    const content = e.target?.result as string
    const project = StorageManager.importProjectFromJSON(content)
    if (project) {
      emit('load-project', project)
      StorageManager.saveProject(project)
      savedProject.value = project
    }
  }
  reader.readAsText(file)
}

const loadRecentProject = () => {
  if (savedProject.value) {
    emit('load-project', savedProject.value)
  }
}

onMounted(() => {
  // Charger le projet sauvegardé s'il existe
  const project = StorageManager.loadProject()
  if (project) {
    savedProject.value = project
  }
})
</script>

<style scoped>
.home-screen {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px;
  overflow-y: auto;
}

.welcome-card {
  background: white;
  border-radius: 12px;
  padding: 60px 40px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  max-width: 500px;
}

.welcome-card h1 {
  font-size: 32px;
  margin-bottom: 10px;
  color: #333;
}

.welcome-card p {
  color: #666;
  margin-bottom: 30px;
  font-size: 16px;
}

.actions {
  display: flex;
  gap: 10px;
  flex-direction: column;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5568d3;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: #f0f0f0;
  color: #333;
}

.btn-secondary:hover {
  background: #e0e0e0;
}

.recent-projects {
  margin-top: 60px;
  width: 100%;
  max-width: 1000px;
}

.recent-projects h2 {
  color: white;
  margin-bottom: 20px;
  font-size: 24px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}

.project-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

.project-name {
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.project-date {
  font-size: 12px;
  color: #999;
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
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
}

.modal h2 {
  margin-bottom: 20px;
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
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.modal-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
