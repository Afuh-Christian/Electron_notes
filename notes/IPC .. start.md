# IPC (Inter Process Communitation) ..........

# In Electron Js 
    -There are two types of processors running .... 
        -Real Main Process  
            -main.js 
        -Render Process (Window Process) 
            -camera.js 
            -index.html 
            -index.css etc 

    - Each Electron app can have 1 RMP and many Render Processes .. 
    -main.js is running on  the Real Main Process = running by node js 
    -camera.js , index.html , index.cs are running on the  Render Process




# How do we pass data between the ipMain and ipRender ..... from  parent window to child window and vise versa 
    -This can be don using IPC  

# There are many types of ipc  ...............    https://www.electronjs.org/docs/latest/tutorial/ipc

# .1       pattern 1 ....Render to Main  
          -data from render to main 

#  .2 ...... pattern 2   Render to Main  and Main to render ... THE BEST OPTION
         -data from render to main 
         -data from main to render 

#  .3  ...  Main to render 

#   .4 .... render to render .... 















