#  Now we are passing data from  main to window 1 ...


 # https://www.electronjs.org/docs/latest/tutorial/ipc#pattern-3-main-to-renderer



# ....

    -we are sending via ...
        webcontents 
    - we are passing both the event and the data like before ...


# ... 
    Mian ... send     the event 
    reload   listerning  for the event 


# ............................main.js ............. 

 ipcMain.on('set-image' , (event,data) => {
      mainWindow.webContents.send('get-image', data)
  })

# code ...
 const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor:colors.backgroud,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

# .. using webContents to send the event and data .........mainWindow = window 1 ... this will send the data to window 1 ...
  ipcMain.on('set-image' , (event,data) => {
      // console.log(data)
      mainWindow.webContents.send('get-image', data)
  })
# ...
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'indexNew.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

app.whenReady().then(()=>{
  createWindow() 

})
# ........


# 2  .................................preload.js ..... for the  window 1 ( parent ...) ............
        -preload is listening for the get-image from the main


const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    getImage: (callback) => ipcRenderer.on('get-image', callback)
})


# 3 ..........................index.js (renderer) ..............uses window.electronAPI to get the event and data .....



window.electronAPI.getImage((event,data) => {
    console.log(data)
})

# now we console the data devtools ......it works ... now we just need to create a dom element and place the image in it ...



# index.js 


window.electronAPI.getImage((event,data) => {
    console.log(data)
    const ImageTag = document.getElementById("depositeImage")
    ImageTag.src = data
}) 

# for this to work .... set img-src 'self' data:;  before the defualt-src 