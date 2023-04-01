# This is where attaching a preload script to your renderer comes in handy. A preload script runs before the renderer process is loaded, and has access to both renderer globals (e.g. window and document) and a Node.js environment.


# Create a new script named preload.js as such:

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})


# To attach this script to your renderer process, pass in the path to your preload script to the webPreferences.preload option in your existing BrowserWindow constructor.

// include the Node.js 'path' module at the top of your file
const path = require('path')

// modify your existing createWindow() function
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
# ................
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
# ................
  })

  win.loadFile('index.html')
}
// ...


# For any interactions with your web contents, you want to add scripts to your renderer process. Because the renderer runs in a normal web environment, you can add a <script> tag right before your index.html files closing </body> tag to include any arbitrary scripts you want:



<script src="./renderer.js"></script>








Now you can see the versions of node , chrome and Electron