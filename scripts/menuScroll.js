const HEADER = document.querySelector("#header")

window.onscroll = function() {scroll()}

function scroll()
{
    if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5)
    {
        HEADER.classList.add("header-fixed")
        HEADER.classList.add("header-dark")
        // HEADER.classList.add("header-smaller")
    }

    else
    {
        HEADER.classList.remove("header-fixed")
        HEADER.classList.remove("header-dark")
        // HEADER.classList.remove("header-smaller")
    }
}