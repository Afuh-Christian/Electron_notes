# we instantiate the Notification class 
    -parameters 
        -1st = "message title"  
        -2nd = {body: "message"}


    new Notification("Image Captured" , {body: "The Image has been capture from the life video"})
    
    
# camera.js 


// ......capture image .....
const video = document.getElementById("camera")
const captureImage = document.getElementById("capture-image")
const image = document.getElementById("image")


captureImage.addEventListener('click', () => {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    canvas.getContext('2d')
      .drawImage(video, 0, 0, canvas.width, canvas.height);
    
    const dataURL = canvas.toDataURL();
    image.src = dataURL

    window.electronAPI.setImage(dataURL)

    new Notification("Image Captured" , {
      body: "The Image has been capture from the life video"
    })


})

// ....................................



navigator.mediaDevices.getUserMedia({video: true, }).then((stream) => {
    console.log(stream)
    video.srcObject = stream
} )

console.log(window.electronAPI)



# ........


