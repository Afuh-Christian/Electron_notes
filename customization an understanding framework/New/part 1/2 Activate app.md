# ....When you close the app ... the server does not stop .... and you can open from it's icon.....



app.whenReady().then(()=>{
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

# when you close the windows .... it does not shot down ..12:00

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
