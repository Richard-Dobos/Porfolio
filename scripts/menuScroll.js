const header = document.querySelector("#header")
const title = document.querySelector("#title")
const menuElements = document.querySelectorAll(".menu-element")


window.onscroll = function() {scroll()}


function scroll()
{
    if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5)
    {
        header.classList.add("header-fixed")
        header.classList.add("header-dark")

        header.classList.add("header-container-smaller")
        header.classList.remove("header-container")

        title.classList.add("title-smaller")
        title.classList.remove("title")

        menuElements.forEach(menuElement => {
            menuElement.classList.remove("menu-element")
            menuElement.classList.add("menu-element-smaller")
        });
    }

    else
    {
        header.classList.remove("header-fixed")
        header.classList.remove("header-dark")

        header.classList.remove("header-container-smaller")
        header.classList.add("header-container")
        
        title.classList.remove("title-smaller")
        title.classList.add("title")

        menuElements.forEach(menuElement => {
            menuElement.classList.remove("menu-element-smaller")
            menuElement.classList.add("menu-element")
        });
    }
}