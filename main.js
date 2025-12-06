import { app, BrowserWindow } from 'electron'
import path from 'path'
import isDev from 'electron-is-dev'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Fixer le chemin des ressources ICU
if (!isDev) {
  process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'
  const icuDataPath = path.join(path.dirname(app.getAppPath()), 'icudtl.dat')
  process.env.ICU_DATA_FILE = icuDataPath
}

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  const startUrl = isDev
    ? 'http://localhost:5173'
    : `file://${path.join(__dirname, 'dist/index.html')}`

  console.log('📂 __dirname:', __dirname)
  console.log('📄 Loading URL:', startUrl)
  
  mainWindow.loadURL(startUrl)

  if (isDev) {
    mainWindow.webContents.openDevTools()
  } else {
    // Open dev tools in production pour voir les erreurs
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
