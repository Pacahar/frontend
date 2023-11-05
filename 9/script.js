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

