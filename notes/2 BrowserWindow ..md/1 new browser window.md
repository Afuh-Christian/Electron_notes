https://www.electronjs.org/docs/latest/api/browser-window

# We can do this on the menu ... 

when we click one of the items on the menu , it goes to a new window ......

{
        label: "New window" ,
        click : async () => {
          const win2 = new BrowserWindow({
            height:500 , 
            width : 400
          });

#          win2.loadFile("./src/index2.html")        //// even though src contains the index.js too ......
        }
      }

# NB ........Loadin a file .......  BE CAREFULL WITH THIS ....IT HAS A FUNNY WAY OF WORKING ...............
 winHTML.loadFile("./src/index.html")

# .......... 
src 
  index.js 
  index.html 
# ......... this looks rediculous but that's how it works ..............



# ..... 
 {
    label: "New Html File" ,
    click : async () => {
      const winHTML = new BrowserWindow({
        height:500 , 
        width : 400,
        show: false 
      });

       winHTML.loadFile("./src/indexNew.html")
       winHTML.once('ready-to-show',() => winHTML.show())
    }
  }
# ......


# We can load  a Url ..... 
  {
    label:"YouTube",
    click : async() => {
      const winTube = new BrowserWindow({
        height:500 , 
        width : 400
      });
       winTube.loadURL('https://github.com')
    }
  }
           
# ........................Let's show the browser window when the content is ready ... 

# 
const { BrowserWindow } = require('electron')
const win = new BrowserWindow({ show: false })
win.once('ready-to-show', () => {
  win.show()
})
# 


# code ........... .....

  {
    label:"Youtube",
    click : async() => {
      const winTube = new BrowserWindow({
        height:500 , 
        width : 400,
  # .......
        show:false
    # .......
      });
       winTube.loadURL('https://www.youtube.com/')
  # .......
       winTube.once('ready-to-show',() => { return winTube.show()})
  # .......
    }
  },

  # ..............







# .........................  {
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


# full code .............


const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');


const menuItems = [
  {
    label: "File" , 
    submenu: [
      {
        label: "New window" ,
        click : async () => {
          const win2 = new BrowserWindow({
            height:500 , 
            width : 400
          });

           win2.loadFile("./index2.html")
        }
      }
    ]
  },

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
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
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



# ........................