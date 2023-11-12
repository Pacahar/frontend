"use strict"



function onReg(){
    var choice = prompt("Желаете пройти регистрацию на сайте?");
    if (choice == "Да"){
        alert("Круто!");
    }
    else{
        alert("Попробуй еще раз");
    }
}

function onLog(){
    var login = prompt("Введите ваш логин:");
        if (login == "Админ"){
            while (true){
                var pass = prompt("Введите пароль")
                if (pass == "Я главный"){
                    alert("Здравствуйте!");
                    break;
                }
                else if (pass == null){
                    alert("Отменено");
                    break;
                }
                else{
                    alert("Неверный пароль");
                }
            }
        }
        else{
            alert("Я вас не знаю");
        }
}

function like(btn){
    if (btn.style.backgroundColor == "red"){
        btn.style.backgroundColor = "white";
        btn.style.color = "black"
        
        document.onmousemove = function (event){}
    }
    else{   
        btn.style.backgroundColor = "red";
        btn.style.color = "white";

        document.onmousemove = function (event){
            let x = event.x;
            let y = event.y;
            console.log(x, y)
            let heart = document.createElement("img");
            heart.src = "./img/heart.png"
            // let heart = document.createElement("p");
            heart.style.width = "50px";
            heart.style.height = "50px";
            heart.style.position = "fixed";
            heart.style.top = y + 10 + "px";
            heart.style.left = x + 10 + "px";

            var page = document.getElementById("page");
            page.append(heart);
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generate_captcha(){
    let task = document.getElementsByClassName("task")[0];

    var string = '';
    var words = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    var max_position = words.length - 1;
    for(let i = 0; i < 6; ++i ) {
        let position = getRandomInt(max_position);
        string = string + words.substring(position, position + 1);
    }

    task.textContent = string;
    let answer_field = document.getElementById("answer");
    answer_field.onblur = function(){
        let answ = document.getElementById("answer");
        if (answ.value === string){
            console.log("Верно");
            document.getElementsByClassName("btn")[0].disabled = false;
            document.getElementsByClassName("captcha")[0].style.display = "none";
        }
        else if (!(answ.value == 0)){
            alert("Неверная капча");
            generate_numeric_captcha();
        }
    }
}

function generate_numeric_captcha(){

    let answer_field = document.getElementById("answer");
    let task = document.getElementsByClassName("task")[0];
    let first = getRandomInt(9) + 1;
    let second = getRandomInt(9) + 1;
    let answer_value = first + second;

    task.textContent = first + "+" + second;
    console.log(task);
    answer_field.onblur = function(){
        let answ = document.getElementById("answer");
        if (answ.value == answer_value){
            console.log("Верно");
            document.getElementsByClassName("btn")[0].disabled = false;
            document.getElementsByClassName("captcha")[0].style.display = "none";
        }
        else if (!(answ.value == 0)){
            alert("Неверная капча");
            generate_numeric_captcha();
        }
    }
}

function short_cards(){
    for (let i = 0; i < document.getElementsByClassName("main_text").length; i++){
        let text_elem = document.getElementsByClassName("main_text")[i];
        if (text_elem.textContent.length > 1000){
            let new_text = text_elem.textContent.substring(0, 1000) + "...";
            text_elem.textContent = new_text;
        }
    }
}

    


