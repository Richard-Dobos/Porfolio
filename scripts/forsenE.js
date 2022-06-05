const image = `<img src="../src/images/forsenE.png" class="forsenE" id="forsen">`

let w = window.innerWidth
let h = window.innerHeight

let audioPlayed = false
let forsenE

spawn()

function spawn()
{
    document.querySelector("#body").innerHTML += image
    
    forsenE = document.querySelector("#forsen")
    
    
    const randomSpawnX = Math.random() * w + 1
    const randomSpawnY = Math.random() * h + 1
    
    console.log(`x: ${randomSpawnX}\ny: ${randomSpawnY}`)
    
    forsenE.style = `top: ${randomSpawnY}px;left: ${randomSpawnX}px;`
    
    forsenE.addEventListener("click", playAudioSequence)

    const timeout = Math.random() * 30000 + 2500

    console.log(timeout)

    setTimeout(liveTime, timeout)
}

function liveTime()
{
    despawn()
}

function playAudioSequence()
{
    playAudio()
    setTimeout(removeAudio, 5000)
    audioPlayed = true
    despawn()
    forsenE = document.querySelector("#forsen")
}

function despawn()
{
    document.querySelector("#forsen").remove()
    spawn()
}

function playAudio()
{
    document.querySelector("#body").innerHTML += `<audio src="../src/never_lucky_man.mp3" id="audio" autoplay></audio>`
}

function removeAudio()
{
    document.querySelector("#audio").remove()
    audioPlayed = false
}