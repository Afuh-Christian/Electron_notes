
# https://www.electronjs.org/docs/latest/tutorial/ipc#pattern-1-renderer-to-main-one-way



# 1 ............................................................index.js 

import ipcMian 
set a listerner within the whenready of the mainWindow.... 


# ipcMain 
    paramters 
        -could be anythig 
        -function .. 

# ex ............
 ipcMain.on('set-image' , (event,data) => { 
      console.log(data)
  })
# ...............



# example ...
# ..............
const {app, BrowserWindow, ipcMain} = require('electron')
# ..............
const path = require('path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
# ..............
  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
  })
# ..............
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


# ...................

# .........3 preload.js 

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('set-title', title)
})


        -contextBridge exposes the setTitle function as the electronAPI object... 
        -this also exposes 'electronAPI as a window object ......

# .........4............................................index.js file is created  and linked to the index.html........

console.log(window.electronAPI)       // will display an object .....


# .........5 ................................................renderer.js ............


Now we can get the data in the index.html.....  ...............




# ############################################################
# ############################################################
# ############################################################
# ############################################################
# ############################################################


# we need preload.js for the window two (where the camera.html in rendered ....)


# cameraPreload.js 


# main.js 

 {
    label: "Camera" ,
    click : async () => {
      const win = new BrowserWindow({
        height: 600 , 
        width : 500 , 
        backgroundColor: colors.backgroud
        , show: false,
#  ........
        webPreferences : {
          preload : path.join(__dirname  , "cameraPreload.js")
        }
#  ........
      })
     
      win.loadFile("./src/camera.html") 
      win.once('ready-to-show' , () => {
        return win.show()
      })
      // win.webContents.openDevTools()

    }


# Now the electronAPI with function title  is available on the window two 

# ...................................renderer.js ............now we can pass something from the front end to the main

renderer ( window.electronAPI.sendTitle(data) )  =>  Preload  ( uses ipcRenderer to send the event and the data ) => Main 

# in the renderer .... we can call the function to send the dta




