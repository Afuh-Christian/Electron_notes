const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

const colors = {
  backgroud : "rgb(152, 153, 154)"
}

const menuItems = [

  {
    label: "File" ,
  },
  
  {
    label: "NewHtml" ,
    click : async () => {
      const winHTML = new BrowserWindow({
        height:500 , 
        width : 400,
        // show: false 
      });
       winHTML.loadFile("./src/index.html")
      //  winHTML.once('ready-to-show',() => winHTML.show())
    }
  },
  {
    label: "Chris" ,
    click : async () => {
      const win = new BrowserWindow({
        height: 500 , 
        width : 300 , 
      }) 
      win.loadFile("./src/hello.html")
    }
  }
  ,

  {
    label:"Github",
    click : async() => {
      const winTube = new BrowserWindow({
        height:500 , 
        width : 400,
        show : false 
        
      });
       winTube.loadURL('https://github.com/')
       winTube.once('ready-to-show', () => winTube.show())
    }
  },

  // to show the window when the content is ready .....  ,
  
  {
    label:"Youtube",
    click : async() => {
      const winTube = new BrowserWindow({
        height:500 , 
        width : 400,
        show:false
      });
      await winTube.loadURL('https://www.youtube.com/')
      winTube.once('ready-to-show',() => { return winTube.show()})
    }
  },
  {
    label: "Camera" ,
    click : async () => {
      const win = new BrowserWindow({
        height: 600 , 
        width : 500 , 
        backgroundColor: colors.backgroud
        , show: false
      })
     
      win.loadFile("./src/camera.html") 
      win.once('ready-to-show' , () => {
        return win.show()
      })
      win.webContents.openDevTools()

    }
  },

]

const menu = Menu.buildFromTemplate(menuItems) 
Menu.setApplicationMenu(menu)













// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// eslint-disable-next-line global-require
if (require('electron-squirrel-startup')) {
  app.quit();
}



const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor:colors.backgroud,
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js'),
    // },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'indexNew.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
