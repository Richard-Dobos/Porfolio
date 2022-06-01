const image = document.querySelector("#main-showcase-image")
let imgIndex = 1

console.log(image.src)

for(n = 1; n < 11;n++)
{
    setTimeout(changePicture(), 2000)

    if(n == 11)
    [
        n = 1
    ]
}




function changePicture()
{
    image.src = "/src/images/images-gallery/img" + imgIndex + ".png"

    imgIndex =+ 1;

    console.log("works" + imgIndex)
}