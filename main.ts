// Modules to control application life and create native browser window
//import BrowserWindow = require('electron')
import {app, BrowserWindow, autoUpdater, dialog} from "electron"

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})
  //let child = new BrowserWindow({parent: mainWindow})
  mainWindow.setMenuBarVisibility(false)
  mainWindow.show()

  console.log('User data directory: ' + app.getPath("userData"))

  console.log(app.getVersion())

  console.log(process.versions.chrome)

  // Setup auto updater
  //autoUpdater.

  // const dialog_options = {
  //   type: 'info',
  //   buttons: ['Restart', 'Later'],
  //   title: 'Application Update',
  //   message: 'Can you see this message?',
  //   detail: 'A new version has been downloaded. Restart the application to apply the updates'
  // }
  // dialog.showMessageBox(dialog_options)

  // Load the specified website
  mainWindow.loadFile('index.html')
  //mainWindow.loadURL('http://www.google.com')

  let contents = mainWindow.webContents
  console.log(contents)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.once('did-finish-load', () => {
   console.log('Web page has finished loading')
})

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  // Emitted when the window loses focus
  mainWindow.on('blur', function() {
    console.log('Window lost focus')
  })

  // Emitted when the window gains focus
  mainWindow.on('focus', function() {
    console.log('Window gained focus')
  })

  // Emitted when the window is maximized
  mainWindow.on('maximize', function() {
    console.log('Window is maximized')
  })

  // Emitted when the window is minimized
  mainWindow.on('minimize', function() {
    console.log('Window is minimized')
  })

  // Emitted when the window is restored
  mainWindow.on('restore', function() {
    console.log('Window is restored')
  })

  // Emitted whe the window is unmaximized
  mainWindow.on('unmaximize', function() {
    console.log('Window is unmaximized')
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
