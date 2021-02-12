// product-item.js
class ProductItem extends HTMLElement {
  constructor(element) {
    super();
    //attaching html to shadow not parent
    let shadow = this.attachShadow({ mode: 'open' });
    const item = document.createElement('li');
    item.setAttribute('class', 'product');
    item.setAttribute('id', element.id);

    const img = document.createElement('img');
    img.src = element.image;
    img.alt = element.title;
    img.setAttribute('width', 200);

    const firstP = document.createElement('p');
    firstP.setAttribute('class', 'title');
    firstP.textContent = element.title;

    const secondP = document.createElement('p');
    secondP.setAttribute('class', 'price');
    secondP.textContent = element.price;

    const button = document.createElement('button');
    // button.setAttribute('onclick', 'alert("Added to Cart!")');
    button.setAttribute('onclick', 'addItem (event)');
    button.textContent = 'Add to Cart';
    if (storedCart !== null) {
      storedCart.forEach(oldItem => {
        if (oldItem == element.id) {
          button.textContent = 'Remove from Cart';
        }
      });
    }

    item.appendChild(img, firstP, secondP, button);
    item.appendChild(firstP);
    item.appendChild(secondP);
    item.appendChild(button);

    let style = document.createElement('style');
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }

    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas:
        "image"
        "title"
        "price"
        "add";
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0, 0, 0, 0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }

    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }

    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }

    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }

    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`;
    shadow.appendChild(style);
    shadow.appendChild(item);
  };
}

customElements.define('product-item', ProductItem);

