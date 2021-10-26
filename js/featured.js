const featured = document.querySelector(".card-container");
const link = "http://localhost/rainy-days-v2/index.php/wp-json/wc/store/products?featured=true";
const bodyTag = document.querySelector(".run-scripts");

//Need to remove this from women and mens product pages(Need to set class tag for each body tag I want it to run on)
async function getFeatured() {

  try {
     const response = await fetch(link);
     const getResults = await response.json();
     console.log(getResults);

    for(let i = 0; i < getResults.length; i++) {
      

      featured.innerHTML += `
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

getFeatured();