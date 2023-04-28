
window.onload = function () {
    // localStorage.clear()
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []


    cartItems.forEach(text => {

    const txt = `<div class="cart-i flex">
    <div class="cart-i-img">
       <img src="img/${text[0]}" alt="book">
    </div>
    <div class="cart-i-name">
       <div class="book-n">${text[1]}</div>
       <p class="p3-text book-w">${text[2]}</p>
    </div>
    <div class="cart-i-price">₹${text[3]}</div>
    <div class="cart-i-quantity">
       <input type="number" name=""  min="1" max="20" value="${text[4]}" onchange="localQuan('${text[1]}',this);totalcount(this) ;totalBill();">
    </div>
    <div class="cart-i-total">₹${text[3] * text[4]}</div>
    <div class="item-remove"><img src="img/icons8-multiply-90.png" onclick = "removeitem('${text[1]}',this) ; totalBill()"></div>
    </div>`

        document.getElementById('cart-item').innerHTML += txt
    });

    totalBill()
}

function totalcount(id) {
    let i = id.parentElement.parentElement;
    i.querySelector(".cart-i-total").innerText = "₹" + (parseInt(i.querySelector(".cart-i-quantity").querySelector("input").value) * parseInt(i.querySelector(".cart-i-price").innerText.replace("₹", "").replace(",", "")))
}

function removeitem(x,id) {
    id.parentElement.parentElement.remove();

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

    for( i = 0 ; i < cartItems.length ; i++)
    {
        if (JSON.stringify(cartItems[i][1]) === JSON.stringify(x)){
            console.log(i)
            cartItems.splice(i,1);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            break;

        }
    }
    
}


function totalBill() {
    let total = 0;
    let cart_item = document.getElementsByClassName("cart-i");
    for (let i = 0; i < cart_item.length; i++) {
        total += parseInt(cart_item[i].querySelector(".cart-i-total").innerText.replace("₹", "").replace(",", ""));

    }
    let id = document.querySelector(".cart-bill-grand");
    let val = "₹" + total;
    id.querySelector("p").innerText = val;
}
function localQuan(ont,id){
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    // let cart_item = document.getElementsByClassName("cart-i");
     quan = id.value
     console.log(quan)
    console.log(ont)
    cartItems.forEach(text => {
          if (text[1] == ont){
              text[4] = parseInt(quan) 
              localStorage.setItem('cartItems', JSON.stringify(cartItems))
          }
   })
   totalcount(id)
}