const image = document.querySelector("#main-showcase-image")
const PATH = "/src/images/images-gallery/"


const imageSrc = [  PATH + "img1.png",
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

let imgIndex = 0

slideShow()

function slideShow()
{
    image.src = imageSrc[imgIndex]
    image.alt = imageSrc[imgIndex]

    setTimeout(slideShow, 3000)

    imgIndex++

    if(imgIndex == imageSrc.length-1)
    {
        imgIndex = 0
    }
}