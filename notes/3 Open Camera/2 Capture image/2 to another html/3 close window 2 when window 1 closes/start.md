# we want window 2 to close when we close window 2  ..... 

# we will create a function in the main that get's called in window 2 ... 

# for this case when we capture an image ... window 2 closes .....


# .... index.js ... 


window.electronAPI.getImage((event,data) => {
    console.log(data)
    const ImageTag = document.getElementById("depositeImage")
    ImageTag.src = data

#    window.electronAPI.closeWindow2()
})

# .... preload .... create the closeWindow2 function ..... we are sending an event to the main .... 


const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    getImage: (callback) => ipcRenderer.on('get-image', callback) ,

    closeWindow2 :() => ipcRenderer.send('close-window-2')

})


# ....main.js        .... it listens for  event from  the preload.js ........in win2 ....not mainWindow..

# ....
 ipcMain.on('close-window-2' , () => {
      return  win.close();
      })
# ....


# code .... 
  {
    label: "Camera" ,
    click : async () => {
      const win = new BrowserWindow({
        height: 600 , 
        width : 800 , 
        backgroundColor: colors.backgroud
        , show: false,
        webPreferences : {
          preload : path.join(__dirname  , "cameraPreload.js")
        },

      })
      ipcMain.on('close-window-2' , () => {
        win.close();
      })
     
      win.loadFile("./src/camera.html") 
      win.once('ready-to-show' , () => {
        return win.show()
      })
      // win.webContents.openDevTools()

    }
  },
# ........



# ...works...









