

# we will use the render - main two way method ... to pass the image from one window to another ..... .... 


# we  have two methods (functions )

    -ipcMain  ( works on the index.js )
    -ipcRender  ( works on the windows (client side ))


# Nb .. we cant use require in the client side .... client side does not know node js 
    -For this we have the preload.js 
    -preload.js runs before the render of the index.html .... 


# we need to create a preload.js for the camera window ..... 