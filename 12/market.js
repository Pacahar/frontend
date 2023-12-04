"use strict"

var cartItems = [];


function addToCart(name, price){
    let a = {
        name,
        price,
        count: 1,
    };
    for (let item of cartItems){
        if (item?.name === name){
            item.count = item.count + 1;
            refreshCart();
            return;
        }
    }
    cartItems.push(a);
    console.log("123");
    refreshCart();
}

function removeFromCart(name){
    let cart = document.getElementsByClassName('cart')[0];
    for (let item of cartItems){
        if (item.name === name){
            if (item.count > 1){
                item.count = item.count - 1;
                refreshCart();
            }
            else{
                cartItems.splice(cartItems.indexOf(item), 1);
                refreshCart();
            }
        }
    }
}

function refreshCart(){
    let cart = document.getElementsByClassName('cart')[0];
    console.log(cart);

    while (cart.firstChild) {
        cart.removeChild(cart.firstChild);
    }

    for (let item of cartItems){
        let elem = document.createElement("div");

        let name = document.createElement("p");
        name.className = "name";
        name.textContent = item.name;

        let count = document.createElement("p");
        count.className = "count";
        count.textContent = item.count;

        let price = document.createElement("p");
        price.className = "price";
        price.textContent = item.price * item.count;

        let delBtn = document.createElement("input");
        delBtn.type = "button";
        delBtn.value = "-";
        delBtn.addEventListener('click', () => {removeFromCart(item.name)});

        let addBtn = document.createElement("input");
        addBtn.type = "button";
        addBtn.value = "+";
        addBtn.addEventListener('click', () => {addToCart(item.name, item.price)});


        
        elem.appendChild(name);
        elem.appendChild(count);
        elem.appendChild(price);
        elem.appendChild(addBtn);
        elem.appendChild(delBtn);


        elem.className = "item";
        
        
        cart.appendChild(elem);
    }
}

function clearCart(){
    cartItems = [];
    console.log(123);
    refreshCart();
}

  //12 прака

let interval = setInterval(action, 3000);

function addNotification(){
    let list = document.getElementsByClassName("list")[0];
    let newNtfs = document.createElement("li");
    newNtfs.textContent = "Lorem";
    list.appendChild(newNtfs);
    addCounter();
}

let ntfsPaused = false;
let addNotification1000 = delay(addNotification, 10000);

function pauseNtfs() {
    console.log("Pause")
    ntfsPaused = true;
}

function delay(f, ms) {
    console.log("Decorator works");
    return function() {setTimeout(() => {
        f.apply(this, arguments);
        interval = setInterval(action, 3000);
    }, ms);
    };
}

function action(){
    if (!ntfsPaused){
        console.log("with out delay");
        addNotification();
    }
    else{
        clearInterval(interval);
        console.log("with delay");
        addNotification1000();
        ntfsPaused = false;
    }
}

function addCounter(){
    let counter = document.getElementById("counter");
    counter.textContent = 1 + Number(counter.textContent);
}

// Cписок

function addLi(){
    let text = prompt("Введите текст:");
    while (text != null && text != ""){    
        let ul = document.getElementsByClassName("list")[1];
        let li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
        console.log(ul, li, text);
        text = prompt("Введите текст:");
    }
}

// Уведомление


function doNotice(text){
    let notice = document.createElement("div");
    notice.className = "notification";
    notice.style.padding = "20px";
    notice.style.backgroundColor = "white";
    notice.style.color = "black";
    notice.style.borderRadius = "15px";
    notice.style.position = "fixed";
    notice.style.top = "300px";
    notice.style.left = "calc(20% + 100px)";
    notice.style.right = "calc(20% + 100px)";
    notice.style.fontWeight = "bold";
    notice.style.border = "2px solid black"
    notice.textContent = text;
    document.getElementsByClassName("page")[0].appendChild(notice)
    setTimeout(() => {document.getElementsByClassName("page")[0].removeChild(notice);}, 7500)
}

