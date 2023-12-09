"use strict"

let burgered = false;

function changeBurg(){
    let bur = document.getElementsByClassName("burger")[0];
    let other = document.getElementsByClassName("other")[0];
    if (!burgered){
        bur.style.left = "30%";
        other.style.display = "block";
        other.style.opacity = "1";
        burgered = !burgered;
    }
    else{
        bur.style.left = "100%";
        other.style.display = "none";
        other.style.opacity = "0";
        burgered = !burgered;
    }
}