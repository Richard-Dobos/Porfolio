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
                        PATH + "img10.png"
                ]   

let imagesInImageGallery = []

let imgIndex = 7
let imageNumbering = 1

let fullscreenImageIndex

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

    setTimeout(slideShow, 10000)
}

function displayImages()
{
    imagesSrc.forEach(image => {
        imageGallery.innerHTML += '<img src="' + image + '" alt="" class="image image-hover" id="image-' + imageNumbering + '">'
        imageNumbering++
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
    selectedImage.src = event.target.src
    popupImage.style.transform = "translateY(0%)"
}

function nextFullscreenImage()
{
    console.log("Next img")
}

function previousFullscreenImage()
{
    console.log("Previous img")
}

imagesInImageGallery.forEach(image => {
    image.addEventListener("click", fullscreenImage)
});