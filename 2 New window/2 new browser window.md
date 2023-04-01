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

#          win2.loadFile("index2.html")
        }
      }


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
           



