// Script.js

window.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      localStorage.setItem('data', JSON.stringify(data));
    })
    .catch(err => console.log(err));
});
const storedData = JSON.parse(window.localStorage.getItem('data'));

storedData.forEach(element => { new ProductItem(element) });

