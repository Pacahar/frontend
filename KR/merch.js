var cartItems = [];


function addToCart(elem){
    let name = elem.getElementsByClassName("name")[0].textContent;
    let id = elem.id;

    let a = {
        id,
        name,
        price: elem.getElementsByClassName("price")[0].textContent,
        count: 1,
        img: elem.getElementsByClassName("img")[0].cloneNode(false)
    };

    a.img.style.width = "200px";
    a.img.style.gridColumn = "1/3";

    for (let item of cartItems){
        if (item?.id === id){
            item.count = item.count + 1;
            refreshCart();
            return;
        }
    }

    cartItems.push(a);
    refreshCart();
}

function removeFromCart(id){
    let cart = document.getElementsByClassName('cart')[0];

    for (let item of cartItems){
        if (item.id === id){
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
        delBtn.addEventListener('click', () => {removeFromCart(item.id)});

        let addBtn = document.createElement("input");
        addBtn.type = "button";
        addBtn.value = "+";
        addBtn.addEventListener('click', () => {addToCart(document.getElementById(item.id))});


        
        elem.appendChild(item.img);
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