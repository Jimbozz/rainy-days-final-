function cartDisplay() {
  let itemsInCart = localStorage.getItem('productsInCart');
  itemsInCart = JSON.parse(itemsInCart);
  let productQuantity = localStorage.getItem('addNumbers');
  productQuantity = JSON.parse(productQuantity);
  let containerOne = document.querySelector('.container-one');
  let containerTwo = document.querySelector('.container-two');
  let cost = localStorage.getItem('totalPrice');
 



  if (itemsInCart && containerOne) {
    containerOne.innerHTML = '';

    
    Object.values(itemsInCart).map(item => {
      containerOne.innerHTML += `
      
          <div class="child-one">
          </div>
          <div class="child-two">
            <h5>${item.name}</h5>
            <p>Size: L / Burnt Orange</p>
            <p>Price per item: $${item.price}</p>
            <div class="quantity">
              Quantity:
              <i class="fas fa-minus-circle"></i>
              <span class="total-quantity">${item.inCart}</span>
              <i class="fas fa-plus-circle"></i>
            </div>
            <a title="remove item from cart" href="#" class="remove"><p>Remove</p></a>
          </div>
          `;


    });

    containerTwo.innerHTML += `

                <h2>Order Summary</h2>
                <div class="child-three">
                    <div>
                        <p>Subtotal</p>
                        <p>Estimated Shipping (Free over $50)</p>
                        <p>Estimated Tax</p>
                    </div>
                    <div class="child-four">
                        <h5>$${cost}</h5>
                        <h5>FREE</h5>
                        <h5>-</h5>
                    </div>
                </div>
                <div class="hr"></div>
                <div class="child-three">
                    <div>
                        <p>Estimated Total</p>
                    </div>
                    <div class="total">
                        <h4>$${cost}</h4>
                    </div>
                </div>
                <a title="goes to checkout page" href="checkout.html" class="button" id="checkout-button">Continue to Checkout</a>
    `
  }
  else {

    containerTwo.innerHTML = `

    <div id="error">Hmmm it seems as though you don't have any products in your basket.</div>
           
    `
  }

}

cartDisplay();

