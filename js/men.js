const url = "https://jamesbadenhorst.one/index.php/wp-json/wc/store/products?exclude=11,13,15";
const productContainer = document.querySelector(".card-container");
const priceLow = document.querySelector('input[name=product-checkbox-low]');

async function getProducts() {

  try {
    const response = await fetch(url);
    const getResults = await response.json();


    createHTML(getResults);

    //Product price filter
    priceLow.addEventListener('change', function() {
    
      if(this.checked) { 
        productContainer.innerHTML = "";
        createHTML(getResults.reverse());
      }
      else {
        productContainer.innerHTML = "";
        createHTML(getResults.reverse());
      }
    });

  }
  
  catch(error) {
    console.log(error);
  }
}

getProducts();



function createHTML(getResults) {
  for(let i = 0; i < getResults.length; i++) {
    console.log(getResults[i].prices.price);

    productContainer.innerHTML += `
    <a title="${getResults[i].name}" href="/product-specific.html?id=${getResults[i].id}">
      <div class="item one">
        <img src="${getResults[i].images[0].src}" alt="${getResults[i].name}">
        <h3>${getResults[i].name}</h3>
        <p class="card-price">$${getResults[i].prices.price}</p>
      </div>
    </a>
    `;
  }
}