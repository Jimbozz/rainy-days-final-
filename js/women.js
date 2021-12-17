const url = "https://jamesbadenhorst.one/index.php/wp-json/wc/store/products?exclude=17,19,21";

const productContainer = document.querySelector(".card-container");

async function getProducts() {

  try {
     const response = await fetch(url);
     const getResults = await response.json();
     console.log(getResults);
     

     createHTML(getResults);


      // var checkboxLow = document.querySelector('input[name=price-low]');
      // var checkboxHigh = document.querySelector('input[name=price-high]');
    
    
    
      // [document.querySelector('input[name=price-low]'), document.querySelector('input[name=price-high]')].forEach(checkboxes => {
      //   checkboxes.addEventListener('change', function(event) {
      //     if (checkboxLow.checked) {
      //       console.log("prices Low");
      //       getResults.reverse();
      //   } else if(checkboxHigh.checked) {
      //     console.log("Prices High");
      //   }
      //   });
      // });
      
    
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