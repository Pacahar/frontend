"use strict"

let fullscrened = false;

function increase_size(img){
    if (!fullscrened){
        let wrap = document.createElement("div");
        wrap.id = "fsi"
        wrap.style.position = "fixed";
        wrap.style.top = "0";
        wrap.style.bottom = "0";
        wrap.style.left = "0";
        wrap.style.right = "0";
        wrap.style.display = "flex";
        wrap.style.alignItems = "center";
        wrap.style.justifyContent = "center";
        wrap.style.backgroundColor = "rgba(255,255,255,0.7)";
        let photo = document.createElement("img");
        photo.src = img.src;
        wrap.onclick = img.onclick;
        photo.style.maxWidth = "60%";
        photo.style.minWidth = "50%";
        photo.style.maxHeight = "80%";

        wrap.appendChild(photo);
        document.getElementsByClassName("page")[0].appendChild(wrap);
    }
    else{
        document.getElementsByClassName("page")[0].removeChild(document.getElementById("fsi"));
    }
    fullscrened = !fullscrened;
}