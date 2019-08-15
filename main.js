// Modules to control application life and create native browser window
const {app, BrowserWindow, dialog} = require('electron')
const {autoUpdater} = require('electron-updater')
const path = require('path')
autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"
//autoUpdater.updateConfigPath = path.join(__dirname, 'app-update.yml')
//const isDev = require('electron-is-dev')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    webPreferences: {
      sandbox: true,
      devTools: true
    }
  })
  mainWindow.setMenuBarVisibility(true)
  mainWindow.maximize()
  mainWindow.show()

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.loadFile('index.html')

  console.log('User data directory: ' + app.getPath("userData"))

  console.log(app.getVersion())

  console.log(process.versions.chrome)

  // Load the specified website
  //mainWindow.loadFile('index.html')

  mainWindow.once('did-finish-load', () => {
   console.log('Web page has finished loading')
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  // Emitted when the window loses focus
  mainWindow.on('blur', () => {
    console.log('Window lost focus')
  })

  // Emitted when the window gains focus
  mainWindow.on('focus', () => {
    console.log('Window gained focus')
  })

  // Emitted when the window is maximized
  mainWindow.on('maximize', () => {
    console.log('Window is maximized')
  })

  // Emitted when the window is minimized
  mainWindow.on('minimize', () => {
    console.log('Window is minimized')
  })

  // Emitted when the window is restored
  mainWindow.on('restore', () => {
    console.log('Window is restored')
  })

  // Emitted when the window is unmaximized
  mainWindow.on('unmaximize', () => {
    console.log('Window is unmaximized')
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
  
// Setup auto update
autoUpdater.checkForUpdatesAndNotify()
autoUpdater.on('error', () => {
  console.log('Error while checking for update')
})

autoUpdater.on('checking-for-update', () => {
  console.log('Checking for update')
})

autoUpdater.on('update-available', (event, info) => {
  console.log('Update available')
})

autoUpdater.on('update-not-available', (event, info) => {
  console.log('Update not available')
})

autoUpdater.on('download-progress', (event, progressObj) => {
  console.log('Download progress')
})

autoUpdater.on('update-downloaded', (event, info) => {
  console.log('Update finished downloading')
  //autoUpdater.checkForUpdatesAndNotify()
  autoUpdater.quitAndInstall(true, true)
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

