const audioSrc = 
[
    "../src/audio/forsenSheffy.mp3",
    "../src/audio/Action_is_Coming.mp3",
    "../src/audio/Capt_Alex_The Musical.mp3",
    "../src/audio/Captain _Alex_.mp3",
    "../src/audio/Captain_Wake_Up.mp3",
    "../src/audio/Everybody_in_Uganda_Knows_Kung_Fu.mp3",
    "../src/audio/Gwe_Gwe_Gwe.mp3",
    "../src/audio/Hello.mp3",
    "../src/audio/never_lucky_man.mp3",
    "../src/audio/VJ_Emmie_on_da_MIC.mp3",
    "../src/audio/We_Do_Action_in_Uganda.mp3"
]

const image = `<img src="../src/images/forsenE.png" class="forsenE" id="forsen">`

let w = window.innerWidth - 250
let h = window.innerHeight - 250

let forsenE

spawn()

function spawn()
{
    document.querySelector("#body").innerHTML += image
    
    forsenE = document.querySelector("#forsen")
    
    
    const randomSpawnX = Math.random() * w + 1
    const randomSpawnY = Math.random() * h + 1
        
    forsenE.style = `top: ${randomSpawnY}px;left: ${randomSpawnX}px;`
    
    forsenE.addEventListener("click", playAudioSequence)

    const timeout = (Math.random() * 15000 + 4000)
    setTimeout(liveTime, timeout)
}

function liveTime()
{
    despawn()
}

function playAudioSequence()
{
    playAudio()
    setTimeout(removeAudio,5000)
    despawn()
}

function despawn()
{
    document.querySelector("#forsen").remove()
    setTimeout(spawn, 5000)
}

function playAudio()
{
    document.querySelector("#body").innerHTML += `<audio src="${randomAudio()}" id="audio" id="audio" autoplay></audio>`
}

function removeAudio()
{
    document.querySelector("#audio").remove()
}

function randomAudio()
{
    let index = Math.floor(Math.random() * audioSrc.length)

    return audioSrc[index]
}