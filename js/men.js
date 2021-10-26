const url = "http://localhost/rainy-days-v2/index.php/wp-json/wc/store/products?exclude=11,13,15";
const productContainer = document.querySelector(".card-container");

async function getProducts() {

  try {
     const response = await fetch(url);
     const getResults = await response.json();
     console.log(getResults);

    for(let i = 0; i < getResults.length; i++) {

      productContainer.innerHTML += `
      <a href="/product-specific.html?id=${getResults[i].id}">
        <div class="item one">
          <img src="${getResults[i].images[0].src}" alt="${getResults[i].name}">
          <h3>${getResults[i].name}</h3>
          <p class="card-price">$${getResults[i].prices.price}</p>
        </div>
      </a>
      `;

    }

    }
  
  catch(error) {
    console.log(error);
  }
}

getProducts();