const mainImage = document.querySelector("#main-showcase-image")
const nextImage = document.querySelector("#next-showcase-image")
const previousImage = document.querySelector("#previous-showcase-image")

const nextImageButton = document.querySelector("#next-image-button")
const previousImageButton = document.querySelector("#previous-image-button")

const nextFullscreenImageBtn = document.querySelector("#next-fullscreenimage-button")
const previousFullscreenImageBtn = document.querySelector("#previous-fullscreenimage-button")

const selectedImage = document.querySelector("#selected-image")
const popupImage = document.querySelector("#popup-image")

const PATH = "../src/images/images-gallery/"
const imageGallery = document.querySelector("#image-gallery")

const imagesSrc = [     PATH + "img1.png",
                        PATH + "img2.png",
                        PATH + "img3.png",
                        PATH + "img4.png",
                        PATH + "img5.png",
                        PATH + "img6.png",
                        PATH + "img7.png",
                        PATH + "img8.png",
                        PATH + "img9.png",
                        PATH + "img11.png",
                        PATH + "img12.png",
                        PATH + "img13.png",
                        PATH + "img14.png",
                        PATH + "img15.png",
                        PATH + "img16.png",
                        PATH + "img17.png",
                        PATH + "img18.png",
                        PATH + "img19.png"
                ]   

let imagesInImageGallery = []

let imgIndex = 7
let fullScreenImageIndex = 0

selectedImage.addEventListener("click", () => {
    popupImage.style.transform = "translateY(-100%)"
})

document.querySelector("#body").addEventListener("keydown", (event) => {    
    if(event.key == "Escape")
    {
        popupImage.style.transform = "translateY(-100%)"
        console.log("Escape pressed")
    }
})

nextFullscreenImageBtn.addEventListener("click", nextFullscreenImage)
previousFullscreenImageBtn.addEventListener("click", previousFullscreenImage)

nextImageButton.addEventListener("click", nextImageInGallery)
previousImageButton.addEventListener("click", previousImageInGallery)

document.querySelector("#body").addEventListener("keydown", (event) =>
{
    if(event.key == "ArrowLeft")
    {
        previousFullscreenImage()
    }

    if(event.key == "ArrowRight")
    {
        nextFullscreenImage()
    }
})

slideShow()
displayImages()

function slideShow()
{
    if(imgIndex+1 >= imagesSrc.length)
    {
        imgIndex = 0
    }
    
    else
    {
        imgIndex++
    }

    if(imgIndex+1 >= imagesSrc.length)
    {
        nextImage.src = imagesSrc[0]
    }

    else
    {
        nextImage.src = imagesSrc[imgIndex+1]
    }

    if(imgIndex == 0)
    {
        previousImage.src = imagesSrc[imagesSrc.length-1]
    }

    else
    {
        previousImage.src = imagesSrc[imgIndex-1]
    }

    mainImage.src = imagesSrc[imgIndex]
    mainImage.alt = imagesSrc[imgIndex]

    console.log(imgIndex)

    setTimeout(slideShow, 30000)
}

function displayImages()
{
    let index = 0
    let imageNumbering = 1

    imagesSrc.forEach(image => {
        imageGallery.innerHTML += `<img src="${image}" alt="${index}" class="image image-hover" id="image-${imageNumbering}">`
        
        imageNumbering++
        index++
    });

    for(i = 1; i <= imagesSrc.length;i++)
    {
        imagesInImageGallery.push(document.querySelector("#image-" + i))
    }
}

function nextImageInGallery()
{
    if(imgIndex+1 >= imagesSrc.length)
    {
        imgIndex = 0
    }
    
    else
    {
        imgIndex++
    }

    if(imgIndex+1 >= imagesSrc.length)
    {
        nextImage.src = imagesSrc[0]
    }

    else
    {
        nextImage.src = imagesSrc[imgIndex+1]
    }

    if(imgIndex == 0)
    {
        previousImage.src = imagesSrc[imagesSrc.length-1]
    }

    else
    {
        previousImage.src = imagesSrc[imgIndex-1]
    }

    mainImage.src = imagesSrc[imgIndex]
    mainImage.alt = imagesSrc[imgIndex]
}

function previousImageInGallery()
{
    if(imgIndex-1 < 0)
    {
        imgIndex = imagesSrc.length-1
    }
    
    else
    {
        imgIndex--
    }

    if(imgIndex+1 >= imagesSrc.length)
    {
        nextImage.src = imagesSrc[0]
    }

    else
    {
        nextImage.src = imagesSrc[imgIndex+1]
    }

    if(imgIndex == 0)
    {
        previousImage.src = imagesSrc[imagesSrc.length-1]
    }

    else
    {
        previousImage.src = imagesSrc[imgIndex-1]
    }

    mainImage.src = imagesSrc[imgIndex]
    mainImage.alt = imagesSrc[imgIndex]
}

function fullscreenImage(event)
{
    fullScreenImageIndex = event.target.alt


    selectedImage.src = event.target.src
    selectedImage.alt = fullScreenImageIndex
    popupImage.style.transform = "translateY(0%)"

    console.log(fullScreenImageIndex)
}

function nextFullscreenImage()
{
    if(fullScreenImageIndex+1 >= imagesSrc.length)
    {
        fullScreenImageIndex = 0
    }

    else
    {
        fullScreenImageIndex++
    }

    selectedImage.src = imagesSrc[fullScreenImageIndex]
    selectedImage.alt = fullScreenImageIndex
}

function previousFullscreenImage()
{
    if(fullScreenImageIndex-1 < 0)
    {
        fullScreenImageIndex = imagesSrc.length-1
    }

    else
    {
        fullScreenImageIndex--
    }

    selectedImage.src = imagesSrc[fullScreenImageIndex]
    selectedImage.alt = fullScreenImageIndex
}

imagesInImageGallery.forEach(image => {
    image.addEventListener("click", fullscreenImage)
});