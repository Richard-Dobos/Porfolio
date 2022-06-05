let image = `<img src="../src/images/forsenE.png" class="forsenE forsenE-display-none" id="forsen">`

document.querySelector("#body").innerHTML += image

let w = window.innerWidth
let h = window.innerHeight

let forsenE

spawn()

forsenE.addEventListener("click", playAudio)

function spawn()
{
    forsenE = document.querySelector("#forsen")

    const randomSpawnX = Math.random() * w + 1
    const randomSpawnY = Math.random() * h + 1

    console.log(`x: ${randomSpawnX}\ny: ${randomSpawnY}`)

    forsenE.classList.remove("forsenE-display-none")

    forsenE.style = `top: ${randomSpawnY}px;left: ${randomSpawnX}px;`
}

function playAudio()
{
    document.querySelector("#body").innerHTML += `<audio src="../src/never_lucky_man.mp3" autoplay></audio>`
}
