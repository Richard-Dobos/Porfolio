const mainImage = document.querySelector("#main-showcase-image")
const nextImage = document.querySelector("#next-showcase-image")
const previousImage = document.querySelector("#previous-showcase-image")

const nextImageButton = document.querySelector("#next-image-button")
const previousImageButton = document.querySelector("#previous-image-button")


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

slideShow()
displayImages()

popupImage.addEventListener("click", () => {
    popupImage.style.transform = "translateY(-100%)"
})

document.querySelector("#body").addEventListener("keydown", (event) => {    
    if(event.key == "Escape")
    {
        popupImage.style.transform = "translateY(-100%)"
        console.log("Escape pressed")
    }
})

nextImageButton.addEventListener("click", nextImageInGallery)
previousImageButton.addEventListener("click", previousImageInGallery)


function slideShow()
{
    mainImage.src = imagesSrc[imgIndex]
    mainImage.alt = imagesSrc[imgIndex]

    if(imgIndex+1 >= imagesSrc.length-1)
    {
        nextImage.src = imagesSrc[0]
        nextImage.alt = imagesSrc[0]
    }

    else
    {
        nextImage.src = imagesSrc[imgIndex+1]
        nextImage.alt = imagesSrc[imgIndex+1]
    }

    if(imgIndex == 0)
    {
        previousImage.src = imagesSrc[imagesSrc.length-1]
        previousImage.alt = imagesSrc[imagesSrc.length-1]
    }

    else
    {
        previousImage.src = imagesSrc[imgIndex-1]
        previousImage.alt = imagesSrc[imgIndex-1]
    }


    setTimeout(slideShow, 5000)

    imgIndex++

    if(imgIndex == imagesSrc.length-1)
    {
        imgIndex = 0
    }
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

}

function previousImageInGallery()
{

}

function fullscreenImage(event)
{
    selectedImage.src = event.target.src
    popupImage.style.transform = "translateY(0%)"
}

imagesInImageGallery.forEach(image => {
    image.addEventListener("click", fullscreenImage)
});