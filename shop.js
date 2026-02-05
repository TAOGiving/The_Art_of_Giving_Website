//Update cart with object

const cart = {};

function addToCart(item, price) {
  if (cart[item]) {
    cart[item].quantity += 1;
  } else cart[item] = { price: price, quantity: 1 };
  updateCart();
}

function removeFromCart(item) {
  if (cart[item]) {
    cart[item].quantity -= 1;
    const totalItemsDiv = document.getElementById("totalQuantity");
    totalItemsDiv.className = "cart-item";
    totalItemsDiv.innerHTML = `<span class="badge bg-primary rounded-pill" id="totalQuantity"
    >Total Items: 0</span`;
    if (cart[item].quantity <= 0) {
      delete cart[item];
    }
    updateCart();
  }
}

function clearCart() {
  for (const item in cart) {
    delete cart[item];
    const totalItemsDiv = document.getElementById("totalQuantity");
    totalItemsDiv.className = "cart-item";
    totalItemsDiv.innerHTML = `<span class="badge bg-primary rounded-pill" id="totalQuantity"
    >Total Items: 0</span`;
  }
  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById("shopping-cart");
  cartDiv.innerHTML = ""; // clear the cart display

  let total = 0;
  let totalItems = 0;

  for (const [item, details] of Object.entries(cart)) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `            <li class="list-group-item d-flex justify-content-between lh-sm mb-1">
    <div>
      <h6 class="my-0">${item}</h6>
      
    </div>
    <span class="text-body-secondary"> £${details.price.toFixed(2)} x ${
      details.quantity
    }</span>
  </li>`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList = "btn btn-warning btn-sm d-inline-flex mt-1 mb-3";
    removeButton.onclick = () => removeFromCart(item);
    itemDiv.appendChild(removeButton);

    cartDiv.appendChild(itemDiv);

    total += details.price * details.quantity;
    totalItems += details.quantity;

    const totalItemsDiv = document.getElementById("totalQuantity");
    totalItemsDiv.className = "cart-item";
    totalItemsDiv.innerHTML = `<span class="badge bg-primary rounded-pill" id="totalQuantity"
    >Total Items: ${totalItems}</span`;
    console.log(cart);
  }

  const totalDiv = document.createElement("div");
  const cartBtn = document.getElementById("cartBtn");
  totalDiv.className = "cart-item";
  totalDiv.innerHTML = `<h4><strong class="badge bg-success rounded-pill mt-3">Total: £${total.toFixed(
    2,
  )}</strong></h4>`;
  cartBtn.innerHTML = `<button
  class="btn btn-success d-inline-flex justify-content-center align-items-center p-1"
  type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#offcanvasRight"
  aria-controls="offcanvasRight"
  id="cartBtn"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-cart3 me-1"
    viewBox="0 0 16 16"
  >
    <path
      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
    />
  </svg>
  £${total.toFixed(2)}
</button>`;
  cartDiv.appendChild(totalDiv);
}

// Paint Product size updater when clicked the price and buttons update
const buyNowBtn = document.getElementById("buyNowBtn");
const addToBasketBtn = document.getElementById("addToBasketBtn");
const price = document.getElementById("productPrice");

let basketDescription = "";
function productA4Update() {
  buyNowBtn.textContent = "Buy A4 Now";
  addToBasketBtn.textContent = "Add A4 To Basket";
  basketDescription = "A4 Giclee Printed";
  price.textContent = "£54.95";
}
function productA3Update() {
  buyNowBtn.textContent = "Buy A3 Now";
  addToBasketBtn.textContent = "Add A3 To Basket";
  basketDescription = "A3 Giclee Printed";
  price.textContent = "£64.95";
}
function productA2Update() {
  buyNowBtn.textContent = "Buy A2 Now";
  addToBasketBtn.textContent = "Add A2 To Basket";
  basketDescription = "A2 Giclee Printed";
  price.textContent = "£74.95";
}
function productA1Update() {
  buyNowBtn.textContent = "Buy A1 Now";
  addToBasketBtn.textContent = "Add A1 To Basket";
  basketDescription = "A1 Giclee Printed";
  price.textContent = "£94.95";
}

// function product960mlUpdate() {
//   buyNowBtn.textContent = "Buy 960ml Now";
//   addToBasketBtn.textContent = "Add 960ml To Basket";
//   basketDescription = "960ml bottle";
//   price.textContent = "£99.84";
// }

//******************************************************************/

const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const shopItems = document.getElementById("product-list");
  const product = document.querySelectorAll(".product");
  const pname = shopItems.getElementsByTagName("h5");

  console.log("Search Box", searchBox);
  console.log("shopItems", shopItems);
  console.log("product", product);
  console.log("pname", pname);

  for (let i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h5")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
