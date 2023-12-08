"use strict"

let slideIndex = 1;

function afterLoad(){
    showSlides(slideIndex);
}

//Слайдер для новостной ленты
function plusSlides(n){
    showSlides(slideIndex += n)
}

function showSlides(n){
    let slides = document.getElementsByClassName("item");
    let i;

    if (n > slides.length){
        slideIndex = 1;
    }
    else if (n < 1){
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++){
        let slide = slides[i];
        slide.style
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "grid";
    
}