function cartDisplay() {
  let itemsInCart = localStorage.getItem("productsInCart");
  itemsInCart = JSON.parse(itemsInCart);
  let containerOne = document.querySelector(".container-one")
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
              <p>Price: $${item.price}</p>
              <div class="quantity">
                Quantity:
                <i class="fas fa-arrow-circle-left"></i>
                <span>${item.inCart}</span>
                <i class="fas fa-arrow-circle-right"></i>
              </div>
              <a href="#" class="remove"><p>Remove</p></a>
          </div>
          <div class="total">
            $${item.inCart * item.price}
          </div>
      
          `;
    });

    containerOne.innerHTML += `
      <div class="basketTotal">
        <h4>Basket total: $${cost} </h4>
      </div>
    `
  }
}

cartDisplay();
