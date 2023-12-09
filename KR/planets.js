window.addEventListener("scroll", () => {
    let h = window.innerHeight;
    let planets = document.getElementsByClassName("planet");

    for (let i = 1; i < planets.length; i++){
        if (window.scrollY >= planets[i].offsetTop + 300 - h) {
            planets[i].classList.add("active");
        } 
        else {
            planets[i].classList.remove("active");
        } 
    }


    
});