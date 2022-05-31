const langBtn = [document.querySelector("#cz"), document.querySelector("#eng")]

langBtn.forEach(lang => {
    lang.addEventListener("click", translation, event)
});

function translation(e)
{
    if(e.target.name == "eng")
    {
        CzToEng()
    }

    else if(e.target.name = "cz")
    {
        EngToCz()        
    }
}

function EngToCz()
{
    console.log("Eng to Cz")
}

function CzToEng()
{
    console.log("Cz to Eng")
}