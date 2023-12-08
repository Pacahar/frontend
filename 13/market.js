"use strict"


// Первое задание
function first(w, h){
    let wind = document.getElementById("first")

    if (document.getElementById("wrap1")){
        wind.removeChild(document.getElementById("wrap1"));
    }

    let wrap = document.createElement("div");
    let img = document.createElement("img");
    img.src = "img/heart.png";

    let width = wind.clientWidth;
    let height = wind.clientHeight;
    wrap.style.position = "absolute";
    let wrap_width = w + 40;
    let wrap_height = h + 40;
    wrap.style.width = wrap_width + "px";
    wrap.style.height = wrap_height + "px";
    wrap.style.top = (height - wrap_height) / 2 + "px";
    wrap.style.left = (width - wrap_width) / 2 + "px";
    wrap.style.border = "solid 1px black";
    wrap.id = "wrap1";

    img.style.width = w + "px";
    img.style.height = h + "px";
    img.style.position = "absolute";
    img.style.top = (wrap_width - h) / 2 + "px";
    img.style.left = (wrap_height - w) / 2 + "px";

    wrap.appendChild(img);
    
    wind.appendChild(wrap);
    console.log(top, left);
    
}

function show_mouse(e){
    console.log(e.x, e.y);
}

//Второе задание
let interval = setInterval(addNotification, 3000);

function addNotification(){
    let list = document.getElementsByClassName("list")[0];
    let newNtfs = document.createElement("li");
    newNtfs.textContent = "Lorem" + document.getElementById("counter").textContent;
    list.appendChild(newNtfs);
    addCounter();
}

function addCounter(){
    let counter = document.getElementById("counter");
    counter.textContent = 1 + Number(counter.textContent);
}

function deleteCounter(){
    let counter = document.getElementById("counter");
    counter.textContent = Number(counter.textContent) - 1;
}


function second(event) {
    let list = document.getElementsByClassName("list")[0];
    let target = event.target;
    if (target.tagName != 'LI') return;
    deleteCounter();
    list.removeChild(target)
}

//Третье задание


window.addEventListener("scroll", () => {
    let img = document.getElementsByClassName("imgScroll");
    for (let i = 0; i < img.length; i++){
        img[i].style.top =  window.scrollY/(1+i/10) + "px";
    }
});

// Четвертое задание

window.addEventListener("scroll", () => {
    
    let img = document.getElementsByClassName("lab4img");

    if (window.scrollY >= 400 ) {
        img[1].classList.add("active");
    } 
    else {
        img[1].classList.remove("active");
    }

    if (window.scrollY >= 800 ) {
        img[2].classList.add("active");
    } 
    else {
        img[2].classList.remove("active");
    }

    if (window.scrollY >= 1200 ) {
        img[3].classList.add("active");
    } 
    else {
        img[3].classList.remove("active");
    }
});