 
 win is  a browser window

#  win.webContents.openDevTools()                .......this should be at the bottom \

# example ......
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
# ..............