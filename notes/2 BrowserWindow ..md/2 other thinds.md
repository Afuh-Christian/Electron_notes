# Alter background color ........ 
https://www.electronjs.org/docs/latest/api/browser-window


const { BrowserWindow } = require('electron')

const win = new BrowserWindow({ 
#     backgroundColor: '#2e2c29' 
    })
win.loadURL('https://github.com')



# there are many othe BrowserWindow options to explore ......

# AVAILABLE OPTIONS ..... https://www.electronjs.org/docs/latest/api/browser-window