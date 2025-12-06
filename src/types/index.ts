export type HotspotType = 'text' | 'image' | 'text-image' | 'link' | 'iframe' | 'scene' | 'audio'

export interface HotspotContent {
  text?: string
  imageUrl?: string
  linkUrl?: string
  iframeUrl?: string
  linkedSceneId?: string
  title?: string
  description?: string
  imageTitle?: string // Titre optionnel pour les hotspots de type 'image'
  audioUrl?: string // URL du fichier audio MP3
}

export interface Hotspot {
  id: string
  type: HotspotType
  x: number // longitude (0-360)
  y: number // latitude (-90 to 90)
  content: HotspotContent
  radius: number // taille du hotspot
  color: string
  visible: boolean
  // Optional cached direction vector (unit) mapped from the equirectangular click
  // This ensures viewer can place the hotspot exactly where it was clicked in the editor.
  dir?: { x: number; y: number; z: number }
}

export interface Scene360 {
  id: string
  name: string
  description: string
  imageUrl: string // image 360° en équirectangulaire
  imageFileName?: string // nom original du fichier image
  hotspots: Hotspot[]
  createdAt: number
  updatedAt: number
}

export interface Project {
  id: string
  name: string
  description: string
  scenes: Scene360[]
  activeSceneId: string
  createdAt: number
  updatedAt: number
}

export interface ExportedProject {
  version: string
  project: Project
  assets: {
    [key: string]: string // base64 encoded images/videos
  }
}
