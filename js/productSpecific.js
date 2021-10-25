const url = "http://localhost/rainy-days-v2/index.php/wp-json/wc/store/products";
const productImage = document.querySelector(".left-wrapper");
const updatedURL = window.location.href;


console.log(updatedURL);





async function getProducts() {

  try {
     const response = await fetch(updatedURL);
     const getResults = await response.json();
     createHTML(getResults);
     console.log(updatedURL);
    
  
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
        <img src="${product.images.src}" alt="${product.name}">
        <h2>Hello</h2>
      `;

      
  })
}

