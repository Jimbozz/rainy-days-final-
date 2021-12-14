const url = "https://jamesbadenhorst.one/index.php/wp-json/wc/store/products";
const productImage = document.querySelector(".left-wrapper");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const queryString = document.location.search;
const getNum = queryString.replace( /^\D+/g, '');
const updatedUrl = url + "?include=" + getNum;

console.log(updatedUrl);
async function getProducts() {

  try {
     const response = await fetch(updatedUrl);
     const getResults = await response.json();
     createHTML(getResults);
    
  }
  catch(error) {
    console.log("what happened here!");
    console.log(error);
  }
}

getProducts();



function createHTML(products) {
  products.forEach(function(product) {
    productImage.innerHTML += `
        <img src="${product.images[0].src}" alt="${product.name}">
      `;

    box1.innerHTML = `
        <div>
            <h1>${product.name}</h1>
            <h3>$${product.prices.price}</h3>
        </div>
    `;

    box2.innerHTML = `
        <p>
          ${product.description}
        </p>
    `;
  })
}

