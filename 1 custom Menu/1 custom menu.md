
https://www.electronjs.org/docs/latest/api/menu



# example .....import Menu from electrons

const menuItems = [
  {
    label: "Menu" ,
    submenu: [
      {
        label: "About"
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(menuItems) 
Menu.setApplicationMenu(menu)


# it works well .....


# next .... .. Menu = parent .... About , Help , Exit are children .... the nesting can go on ....
const menuItems = [
  {
    label: "Menu" ,
    submenu: [
      {
        label: "About",
      },
      {
        label: "Help",
      },
      {
        label: "Exit",
      },

    ]
  }
]

#    TYPE : 
# .....type: "separator"        creates a line between Help and Exit..........

 {
        label: "Help",
      },
      {
        type : "separator"
      },
      {
        label: "Exit",
      },

# .....................full code .....



# ..............................Now to make a click action ........

 {
        label: 'Learn More',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://electronjs.org')      // this function take u out of the app ......
        } 
      }


# when you click Learn more .....

click : async () => app.quit ....


# full code ...................
const { app, BrowserWindow, Menu ,shell } = require('electron');
const path = require('path');


const menuItems = [
  {
    label: "Menu" ,
    submenu: [
      {
        label: "About",
        submenu :[
          {
            label: "How to close window",
            
          },
          {
            label: "How destroy pc",

          }
        ]
      },
      {
        label: "Help",
      },
      {
        type : "separator"
      },
      {
        label: "Exit",
        click: async () => app.quit()
      },
      {
        label: "Learn More" ,
        click: async () => {
          await shell.openExternal('https://electronjs.org')      // this function take u out of the app ......
        } 
      }

    ]
  }
]

const menu = Menu.buildFromTemplate(menuItems) 
Menu.setApplicationMenu(menu)

# ......................................


#   ROLE ..... rather than writing click method for all of the  labels ... electron provides role ... .

# so use role rather .....................







# doc..

const { app, Menu } = require('electron')

const isMac = process.platform === 'darwin'

const template = [
  // { role: 'appMenu' }
  ...(isMac ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideOthers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...(isMac ? [
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' },
        { type: 'separator' },
        {
          label: 'Speech',
          submenu: [
            { role: 'startSpeaking' },
            { role: 'stopSpeaking' }
          ]
        }
      ] : [
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' }
      ])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...(isMac ? [
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' }
      ] : [
        { role: 'close' }
      ])
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://electronjs.org')
        }
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)


# ...............................................