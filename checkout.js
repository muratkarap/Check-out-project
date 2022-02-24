const products       = document.querySelectorAll(".product");
const removeProduct  = document.querySelectorAll(".remove-product");

const plus           = document.querySelectorAll(".fa-plus");
const minus          = document.querySelectorAll(".fa-minus");
const quantity       = document.querySelectorAll("#product-quantity");

calculateTotal();

for (let i = 0; i < plus.length; i++) {
   
    plus[i].addEventListener("click", ()=>{
        (+quantity[i].innerHTML++).toFixed(2);
        calculateTotal();
    });
 
    minus[i].addEventListener("click", ()=>{
        +quantity[i].innerHTML <= 1 ? 1 : (+quantity[i].innerHTML--).toFixed(2);
        calculateTotal();

    });
  
    removeProduct[i].addEventListener("click", ()=>{
        if (confirm("Are You Sure!\nYou are about to remove the item") == true) {
            products[i].remove();
            calculateTotal();
        }
    })
}


function calculateTotal(){
    const subTotal      = document.querySelectorAll(".buy-detail")[0].children[1];
    const tax           = document.querySelectorAll(".buy-detail")[1].children[1];
    const shipping      = document.querySelectorAll(".buy-detail")[2].children[1];
    const Total         = document.querySelectorAll(".buy-detail")[3].children[1];

    const productTotal  = document.querySelectorAll(".product-line-price");


    productTotalPrice();

    let subTotalPrice = 0;
    productTotal.forEach(i => {subTotalPrice += +i.innerHTML;});
    subTotal.innerHTML  = subTotalPrice.toFixed(2);
    tax.innerHTML       = (+subTotal.innerHTML * 0.18).toFixed(2);
    shipping.innerHTML  = subTotalPrice == 0 ? (0).toFixed(2) : 15.00.toFixed(2);
    Total.innerHTML     = (+subTotal.innerHTML + +tax.innerHTML + +shipping.innerHTML).toFixed(2);

   
    function productTotalPrice(){
        const productPrice  = document.querySelectorAll(".product-price ");
        const productTotal  = document.querySelectorAll(".product-line-price");
        const newQuantity   = document.querySelectorAll("#product-quantity");
        
        for (let i = 0; i < productTotal.length; i++) {
            productTotal[i].innerHTML = +newQuantity[i].innerHTML * productPrice[i].textContent;
            productTotal[i].innerHTML = (+productTotal[i].innerHTML).toFixed(2)
        }
    }
}
