
const addCart = document.querySelectorAll(".add-cart");
const products = [

  {   
    name: "M's Calcite Jacket",
    price: 328,
    inCart: 0
  }
]


for(let i=0; i < addCart.length; i++) {
  addCart[i].addEventListener('click', () => {
    addNumbers(products[i]);
    totalPrice(products[i]);
  });
}

function onCartReload() {
  let productTotal = localStorage.getItem('addNumbers');

  if(productTotal) {
    document.querySelector('.basket-items').textContent = productTotal;
  }
}

function addNumbers(product) {

  let productTotal = localStorage.getItem('addNumbers');
  

  productTotal = parseInt(productTotal);

  if(productTotal) {
    localStorage.setItem('addNumbers', productTotal + 1);
    document.querySelector('.basket-items').textContent = productTotal + 1;
  }
  else {
    localStorage.setItem('addNumbers', 1);
    document.querySelector('.basket-items').textContent = 1;
  }

  setProductItems(product);
  
}

function setProductItems(product) {

  let itemsInCart = localStorage.getItem('productsInCart');
  itemsInCart = JSON.parse(itemsInCart);


if(itemsInCart != null) {

  if(itemsInCart[product.name] == undefined) {
    itemsInCart = {
      ...itemsInCart, [product.name]: product
    }
  }
  itemsInCart[product.name].inCart += 1;
}
else {

  product.inCart = 1;
  itemsInCart = {
    [product.name]: product
  }
}

  localStorage.setItem("productsInCart", JSON.stringify(itemsInCart));
}


function totalPrice(product) {
  let cost = localStorage.getItem('totalPrice');

  if(cost != null) {
    cost = parseInt(cost);
    localStorage.setItem("totalPrice", cost + product.price);
  }
  else {
    localStorage.setItem("totalPrice", product.price);
  }
  
}

function cartDisplay() {
  let itemsInCart = localStorage.getItem("productsInCart");
  itemsInCart = JSON.parse(itemsInCart);

}

onCartReload();
cartDisplay();




const addToCart = document.querySelector('.cart-button');
const checkoutBt = document.querySelector('#checkout-button');
let sizeError = document.querySelector('#cartError');


function selectSize(event) {
  
  addToCart.disabled = false;
  
}

function viewCart() {

  checkoutBt.disabled = false;
}