// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    super();
    var storedData = JSON.parse(localStorage.getItem("data"));
    storedData.forEach(element => {
      const parent = document.getElementById("product-list");
      let shadow = parent.attachShadow({ mode: 'open' });
      let item = document.createElement('li');
      item.classList.add("product");
      item.id = element.id;
      let title = element.title;
      let price = element.price;
      let imgSrc = element.image;
      let imgAlt = element.title;
      // <li class="product">
      //     <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
      //     <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
      //     <p class="price">$109.95</p>
      //     <button onclick="alert('Added to Cart!')">Add to Cart</button>
      // </li>
      const img = '<img src=' + imgSrc + 'alt=' + imgAlt + 'width=200>';
      const firstP = ' <p class="title">' + title + '</p>'
      const secondP = ' <p class="price">' + price + '</p>'
      const button = '<button onclick="alert("Added to Cart!")">Add to Cart</button>'
      item.innerHTML = (img + firstP + secondP + button);
      shadow.appendChild(item);
      parent.attachShadow({ mode: 'close' });
    });
  }
}
customElements.define('product-item', ProductItem);

