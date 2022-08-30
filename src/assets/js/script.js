const x = window.matchMedia("(max-width: 767px)")
const slideBtn = document.getElementById('slide-right')
const leftSlider = document.getElementById('slider-left')
const middleSlider = document.getElementById('slider-middle')
const rightSlider = document.getElementById('slider-right')
let clicks = 0

if(x.matches) {
    slideBtn.addEventListener('click', startSlide)
}

function startSlide(e) {
    clicks++

    if(clicks == 1) {
        leftSlider.classList.remove("view-slider")
        leftSlider.classList.add("hide-slider")
        middleSlider.classList.add("view-slider")
    }
    else if(clicks == 2) {
        middleSlider.classList.remove("view-slider")
        rightSlider.classList.add("view-slider")
    }
    else if(clicks == 3) {
        rightSlider.classList.remove("view-slider")
        leftSlider.classList.add("view-slider")
        clicks = 0
    }
}