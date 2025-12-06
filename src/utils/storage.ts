import { Project } from '../types/index'

const STORAGE_KEY = 'scene360_project'

export class StorageManager {
  static saveProject(project: Project): void {
    try {
      // Save project but strip image URLs, keep only filenames
      const projectForStorage: any = {
        ...project,
        scenes: project.scenes.map(scene => ({
          ...scene,
          imageUrl: '' // Clear the actual image data
          // Keep imageFileName
        }))
      }
      
      const jsonString = JSON.stringify(projectForStorage)
      localStorage.setItem(STORAGE_KEY, jsonString)
      console.log(`✅ Project saved: ${project.scenes.length} scenes`)
    } catch (error: any) {
      console.error('❌ Error saving project:', error)
    }
  }

  static loadProject(): Project | null {
    try {
      const projectData = localStorage.getItem(STORAGE_KEY)
      
      if (!projectData) {
        console.log('⚠️ No project found in localStorage')
        return null
      }
      
      const project = JSON.parse(projectData)
      console.log(`✅ Loaded project: ${project.scenes.length} scenes`)
      
      // Log missing images
      const scenesWithoutImages = project.scenes.filter((s: any) => !s.imageUrl)
      if (scenesWithoutImages.length > 0) {
        console.log(`⚠️ ${scenesWithoutImages.length} scenes need images to be re-uploaded`)
      }
      
      return project
    } catch (error) {
      console.error('❌ Error loading project:', error)
      return null
    }
  }

  static async loadProjectAsync(): Promise<Project | null> {
    return this.loadProject()
  }

  static deleteProject(): void {
    try {
      localStorage.removeItem(STORAGE_KEY)
      console.log('✅ Project deleted')
    } catch (error) {
      console.error('Error deleting project:', error)
    }
  }

  static getProjectsList(): Array<{ id: string; name: string; lastModified: number }> {
    const project = this.loadProject()
    if (project) {
      return [
        {
          id: project.id,
          name: project.name,
          lastModified: project.updatedAt || Date.now()
        }
      ]
    }
    return []
  }

  static importProjectFromJSON(jsonString: string): Project | null {
    try {
      const data = JSON.parse(jsonString)
      return data.project || data
    } catch (error) {
      console.error('Error importing project:', error)
      return null
    }
  }
}
