const subTotal = document.querySelector('.order-total1');
const total = document.querySelector('.order-total2');
const cost = localStorage.getItem('totalPrice');


subTotal.innerHTML = `
  <div class="order-total1">
  <h5>$${cost}</h5>
  <h5>FREE</h5>
  <h5>-</h5>
  </div>
  `
;


total.innerHTML = `
  <div class="order-total2">
  <h5>$${cost}</h5>
  </div>
  `
;

