//Function for side navbar
var menuIcon = document.getElementById("menuIcon")
var closenav = document.getElementById("closenav")
var sidenav = document.getElementById("sidenav")
menuIcon.addEventListener("click", function () {
    sidenav.style.left = 0;
})
closenav.addEventListener("click", function () {
    sidenav.style.left = "-50%"
})

//Function for the Carousel

var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton = document.getElementById("slider-right-activate")
var sliderimage = document.querySelector(".slider-image-container")
var slidermargin = 0

sliderrightbutton.addEventListener("click",

    function () {
        slidermargin = slidermargin + 100

        if (slidermargin > 200) {
            slidermargin = 0
            sliderimage.style.marginLeft = 0;
        }
        else {
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }

    }
)

sliderleftbutton.addEventListener("click",

    function () {

        if (slidermargin == 0) {

            slidermargin = 200
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }
        else {

            slidermargin = slidermargin - 100
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }

    }
)


//Function for Ad
var Ad = document.getElementById("Ad")
var close = document.getElementById("close")
close.addEventListener("click", function () {
    Ad.style.display = "none"
})