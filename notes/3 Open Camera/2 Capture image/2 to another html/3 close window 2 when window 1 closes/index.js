console.log("Hello")




window.electronAPI.getImage((event,data) => {
    console.log(data)
    const ImageTag = document.getElementById("depositeImage")
    ImageTag.src = data

    window.electronAPI.closeWindow2()
})