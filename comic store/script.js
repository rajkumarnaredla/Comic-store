const products = [
  {
    id: 1,
    name: "Iron Man",
    price: 15,
    image: "images/comic-01.jpg",
    fallback: "images/avengers-infinity-war.svg"
  },
  {
    id: 2,
    name: "Incredible Hulk",
    price: 18,
    image: "images/comic-02.jpg",
    fallback: "images/avengers-infinity-war.svg"
  },
  {
    id: 3,
    name: "Thor and Wonders",
    price: 12,
    image: "images/comic-03.jpg",
    fallback: "images/avengers-infinity-war.svg"
  },
  {
    id: 4,
    name: "Dr. Strange",
    price: 20,
    image: "images/comic-04.jpg",
    fallback: "images/avengers-infinity-war.svg"
  },
  {
    id: 5,
    name: "What If",
    price: 14,
    image: "images/comic-05.jpg",
    fallback: "images/avengers-infinity-war.svg"
  },
  {
    id: 6,
    name: "Multiverse",
    price: 16,
    image: "images/comic-06.jpg",
    fallback: "images/avengers-infinity-war.svg"
  },
  {
    id: 7,
    name: "Superman",
    price: 17,
    image: "images/comic-07.jpg",
    fallback: "images/avengers-infinity-war.svg"
  },
  {
    id: 8,
    name: "Justice League",
    price: 19,
    image: "images/comic-08.jpg",
    fallback: "images/avengers-infinity-war.svg"
  },
  {
    id: 9,
    name: "Spider-Verse",
    price: 18,
    image: "images/comic-09.jpg",
    fallback: "images/avengers-infinity-war.svg"
  },
  {
    id: 10,
    name: "Batman Trilogy",
    price: 21,
    image: "images/comic-10.jpg",
    fallback: "images/avengers-infinity-war.svg"
  }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

// Display Products
products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${product.fallback}'">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

// Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

// Update Cart
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>$${item.price}</span>
        <button onclick="removeItem(${index})">❌</button>
      </div>
    `;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

// Remove Item
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Toggle Cart
function toggleCart() {
  document.getElementById("cart").classList.toggle("active");
}
