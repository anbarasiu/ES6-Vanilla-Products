var productTemplate = require('./templates/product.hbs');
import callAPI from './modules/service';
import Products from './modules/Products';

let products;
let productsContainer = document.querySelector('.products');

connectToAPI('URLGOESHERE', 'GET')
  .then(response => {
      if(!response.length) return;
      products = new Products();

      products.loadProducts().map(function(p){
        productsContainer.innerHTML += productTemplate({img:p.img, name: p.name, price : p.price});
      });
  });

document.getElementById('filter').addEventListener('click', function(){
  var selected = [];
  this.parentElement.querySelectorAll('input[name=filter]:checked').forEach(function(c){
    selected.push(c.value.toLowerCase());
  });
  clearProducts();
  products.filter(selected).map(function(p){
      productsContainer.innerHTML += productTemplate({img:p.img, name: p.name, price : p.price});
  });
});

document.getElementById('sort').addEventListener('click', function(){
  products.sort();
});

function clearProducts(){
    productsContainer.innerHTML = '';
}
