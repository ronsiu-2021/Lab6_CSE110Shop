// Script.js

// variables for elements stored in cart
const storedCart = JSON.parse(localStorage.getItem('cartElement'));
const cartData = localStorage.getItem('cartElement');

// variables for fetched item
const previousDataArray = localStorage.getItem('data');
const storedData = JSON.parse(localStorage.getItem('data'));

// the section for the newly created element
const productList = document.getElementById('product-list');

// Indicating how many elements in the current cart
const count = document.getElementById('cart-count');

window.addEventListener('DOMContentLoaded', () => {
  if (previousDataArray === null) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('data', JSON.stringify(data));
        data.forEach(element => {
          productList.appendChild(new ProductItem(element));
        })
      })
      .catch(err => console.log(err));
  } else {
    JSON.parse(previousDataArray).forEach(element => {
      productList.appendChild(new ProductItem(element));
    });
  }

});

let cartElement;
if (localStorage.getItem('cartElement') !== null) {
  cartElement = storedCart;
  count.textContent = cartElement.length;
} else {
  cartElement = [];
}

productList.addEventListener("click", addItem);
function addItem (event) {
  let elet = event.target.parentNode.id;
  if (elet === 'product-list') {
    return;
  }
  if (!cartElement.includes(elet)) {
    cartElement.push(elet);
    count.textContent++;
    event.target.innerHTML = "Remove from Cart";
  } else {
    const index = cartElement.indexOf(elet);
    cartElement = cartElement.filter(num => cartElement.indexOf(num) != index);
    count.textContent--;
    event.target.innerHTML = "Add to Cart";
  }
  localStorage.setItem('cartElement', JSON.stringify(cartElement));
}
