const url = "http://localhost/rainy-days-v2/index.php/wp-json/wc/store/products?exclude=17,19,21";
const productContainer = document.querySelector(".card-container");

async function getProducts() {

  try {
     const response = await fetch(url);
     const getResults = await response.json();
    //  createHTML(getResults);
     console.log(getResults);

     productContainer.innerHTML = "";

    for(let i = 0; i < getResults.length; i++) {

      console.log(getResults[i].categories[0].name === 'mens');

      if(!getResults[i].categories[0].name === 'women'){
        continue;
        
      }
      

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


// function createHTML(products) {
//   products.forEach(function(product) {
//     productContainer.innerHTML += `
//     <a href="/product-specific.html?id=${}">
//       <div class="item one">
//         <img src="${product.images[0].src}" alt="${product.name}">
//         <h3>${product.name}</h3>
//         <p class="card-price">$${product.prices.price}</p>
//       </div>
//     </a>
//     `;
//   })
// }
