import { ref } from 'vue'

export function generateId(): string {
  return 'id_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now()
}

export function dataUrlToBlob(dataUrl: string): Blob {
  const arr = dataUrl.split(',')
  const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/png'
  const bstr = atob(arr[1])
  const n = bstr.length
  const u8arr = new Uint8Array(n)
  for (let i = 0; i < n; i++) {
    u8arr[i] = bstr.charCodeAt(i)
  }
  return new Blob([u8arr], { type: mime })
}

export function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

export function downloadFile(content: string, filename: string, type: string = 'text/plain') {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export function downloadZip(files: { [key: string]: string }): void {
  // Note: Pour un vrai zip, vous devriez utiliser jszip
  // Pour maintenant, on crée juste une structure de fichiers
  console.log('Export ZIP files:', files)
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleString('fr-FR')
}

// Toast notifications
export const toasts = ref<Array<{ id: string; message: string; type: 'success' | 'error' | 'info'; timeout?: number }>>([])

export function showToast(message: string, type: 'success' | 'error' | 'info' = 'info', timeout: number = 3000) {
  const id = generateId()
  const toast = { id, message, type, timeout }
  toasts.value.push(toast)
  
  if (timeout > 0) {
    setTimeout(() => {
      removeToast(id)
    }, timeout)
  }
  
  return id
}

export function removeToast(id: string) {
  const index = toasts.value.findIndex(t => t.id === id)
  if (index > -1) {
    toasts.value.splice(index, 1)
  }
}
