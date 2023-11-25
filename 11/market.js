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
    let cart = document.getElementsByClassName('cart')[0]

    //bubbleSort(cartItems);
    cartItems.sort(compareObjects)
    cartItems.reverse()

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
        price.textContent = item.price * item.count + "₽";

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
    refreshCart();
}

function compareObjects(a, b){
    if (a.count > b.count) return 1;
    if (a. count == b.count) return 0;
    if (a.count < b.count) return -1;
}

// function bubbleSort(arr) {
//     for (let j = arr.length - 1; j > 0; j--) {
//       for (let i = 0; i < j; i++) {
//         if (arr[i].name > arr[i + 1].name) {
//           let temp = arr[i];
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
//         }
//       }
//     }
//   }

var arr = [];

function addValue(value){
arr.push(value);
refreshArr();
}

function refreshArr(){

    let ans = document.getElementsByClassName('answer')[0];

    while(ans.firstChild){
        ans.removeChild(ans.firstChild);
    }

    for (let value of arr){
        let node = document.createElement("div");
        node.textContent = value;
        ans.appendChild(node);
    }
}

function filt(){
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    console.log(from, to)

    // let newArr = []
    // for (let value of arr){
    //     if (value >= from && value <= to){
    //         newArr.push(value);
    //     }
    // }
    // arr = newArr;

    arr = arr.filter(item => item >= from && item <= to)

    refreshArr();
}