//Update cart with object

let cart = JSON.parse(localStorage.getItem("cart")) || {};

function addToCart(item, price, productCode) {
  if (cart[item]) {
    cart[item].quantity += 1;
  } else {
    cart[item] = {
      price: price,
      productCode: productCode,
      quantity: 1,
    };
  }

  // Save the updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

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
    localStorage.setItem("cart", JSON.stringify(cart));
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
    localStorage.clear();
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
  totalDiv.innerHTML = `<h4><strong class="badge bg-success rounded-pill mt-3">Total: £${total.toFixed(2)}</strong></h4>`;
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

//*********************************************/
// Update Basket on all pages from Local Storage
//*********************************************/

// document.addEventListener("DOMContentLoaded", function () {
//   if (window.location.pathname !== "/Structure/checkout.html") {
//     const localBasket = JSON.parse(localStorage.getItem("cart")) || [];

//     function updateBasket() {
//       localBasket.forEach((itemDetails) => {
//         if (!itemDetails) return;

//         const { product, price, image, productCode } = itemDetails;

//         addToCart(product, productCode, price, image);
//       });

//       console.log("Basket Updated");
//     }

//     updateBasket();
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  if (Object.keys(cart).length > 0) {
    updateCart();
  }
  console.log("Cart loaded:", cart);
});

// Paint Product size updater when clicked the price and buttons update
// const buyNowBtn = document.getElementById("buyNowBtn");
// const addToBasketBtn = document.getElementById("addToBasketBtn");
// const price = document.getElementById("productPrice");

// let basketDescription = "";
// function productA4Update() {
//   buyNowBtn.textContent = "Buy A4 Now";
//   addToBasketBtn.textContent = "Add A4 To Basket";
//   basketDescription = "A4 Giclee Printed";
//   price.textContent = "£54.95";
// }
// function productA3Update() {
//   buyNowBtn.textContent = "Buy A3 Now";
//   addToBasketBtn.textContent = "Add A3 To Basket";
//   basketDescription = "A3 Giclee Printed";
//   price.textContent = "£64.95";
// }
// function productA2Update() {
//   buyNowBtn.textContent = "Buy A2 Now";
//   addToBasketBtn.textContent = "Add A2 To Basket";
//   basketDescription = "A2 Giclee Printed";
//   price.textContent = "£74.95";
// }
// function productA1Update() {
//   buyNowBtn.textContent = "Buy A1 Now";
//   addToBasketBtn.textContent = "Add A1 To Basket";
//   basketDescription = "A1 Giclee Printed";

//   price.textContent = "£94.95";
// }

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
  const pname = shopItems.getElementsByTagName("h2");

  console.log("Search Box", searchBox);
  console.log("shopItems", shopItems);
  console.log("product", product);
  console.log("pname", pname);

  for (let i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];

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

//*****************************/
// OOP Product card constructer
//*****************************/

// JavaScript code to generate a product card and modal
class Product {
  constructor(
    slug,
    name,
    productCode,
    price,
    description,
    longDescription,
    imageUrls,
    productURL,
  ) {
    this.name = name;
    this.ProductCode = productCode;
    this.price = price;
    this.slug = slug;
    this.description = description;
    this.longDescription = longDescription;
    this.imageUrls = imageUrls; //Array of image URLS
    // this.baseImage = "Images/Heart logo.png";
    // this.charLimits = charLimits;
    this.productURL = productURL;
  }

  renderCard() {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.classList.add("product");
    card.classList.add("col-sm-3");
    card.classList.add("col-5");
    // card.classList.add("m-3");
    card.href = `dist/products/${this.slug}.html`; // dynamic URL

    const img = document.createElement("img");
    // img.src = this.baseImage;
    img.src = this.imageUrls[0];
    img.alt = this.name;
    img.id = "product-image";
    img.dataset.src = this.imageUrls[0]; //Display the first image in the card

    // img.classList.add("lazy-img");
    img.href = `dist/products/${this.slug}.html`; // dynamic URL

    card.appendChild(img);
    console.log(img.dataset.src);

    const title = document.createElement("h2");
    title.innerHTML = this.name;
    title.classList.add("primary_accent");
    title.classList.add("font_family");
    title.classList.add("mb-1");
    title.classList.add("mb-sm-3");
    title.href = `dist/products/${this.slug}.html`; // dynamic URL

    card.appendChild(title);

    const desc = document.createElement("p");
    desc.classList.add("handlee-regular");
    desc.textContent = this.description;
    // card.appendChild(desc);

    const price = document.createElement("span");
    price.classList.add("price");
    price.classList.add("handlee-regular");
    price.classList.add("mb-1");
    price.classList.add("mb-sm-3");
    price.textContent = `£${this.price}`;
    price.href = `dist/products/${this.slug}.html`; // dynamic URL

    card.appendChild(price);

    const atbButton = document.createElement("a");
    atbButton.classList.add("btn");
    atbButton.classList.add("primary_accent_btn");
    atbButton.classList.add("btn-sm");
    atbButton.classList.add("col-4");
    atbButton.classList.add("mb-2");
    atbButton.classList.add("mx-2");
    atbButton.classList.add("buy-now-btn");
    atbButton.classList.add("handlee-regular");
    atbButton.textContent = "Buy Now";
    // atbButton.onclick = () => {
    //   addToCart(this.name, this.price, this.imageUrls[0]);
    // };
    atbButton.href = `${this.productURL}`;
    card.appendChild(atbButton);

    const bnButton = document.createElement("a");
    bnButton.classList.add("btn");
    bnButton.classList.add("btn-outline-secondary");
    bnButton.classList.add("btn-sm");
    bnButton.classList.add("col-4");
    bnButton.classList.add("mb-2");
    bnButton.classList.add("mx-2");
    bnButton.classList.add("more-info-btn");
    bnButton.classList.add("handlee-regular");
    bnButton.textContent = "More Info";
    bnButton.href = `dist/products/${this.slug}.html`; // dynamic URL
    card.appendChild(bnButton);

    return card;
  }
}

const products = [
  new Product(
    "RosaTheLabrador4inchx6inch(4R)Print",
    "Rosa The Labrador 4 inch x 6 inch (4R) Print",
    "Rosa_Lab_4X6-PRINT",
    14.99,
    "A 4 inch by 6 inch Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
      "/images/Rosa_Labrador/Rosa_the_Labrador_QR_Code.png",
    ],
    "https://square.link/u/DMuQ7K3Q",
  ),
  new Product(
    "RosaTheLabrador5inchx7inchPrint",
    "Rosa The Labrador 5 inch x 7 inch Print",
    "Rosa_Lab_5X7-PRINT",
    17.99,
    "A 5 inch by 7 inch Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
      "/images/Rosa_Labrador/Rosa_the_Labrador_QR_Code.png",
    ],
    "https://square.link/u/4yzuxH2u",
  ),
  new Product(
    "RosaTheLabrador10inchx8inch(A4)Print",
    "Rosa The Labrador 10 inch x 8 inch (A4) Print",
    "Rosa_Lab_0A4-PRINT",
    34.99,
    "A 10 inch by 8 inch (A4) Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
      "/images/Rosa_Labrador/Rosa_the_Labrador_QR_Code.png",
    ],
    "https://square.link/u/0zeABJtV",
  ),
  new Product(
    "RosaTheLabradorA3",
    "Rosa The Labrador A3",
    "Rosa_Lab_0A3-PRINT",
    46.99,
    "An A3 Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colors. Perfect for framing and displaying in your home or office.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
      "/images/Rosa_Labrador/Rosa_the_Labrador_QR_Code.png",
    ],
    "https://square.link/u/nIYnDih5",
  ),
  new Product(
    "RosaTheLabradorA2",
    "Rosa The Labrador A2",
    "Rosa_Lab_0A2-PRINT",
    54.99,
    "An A2 Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
      "/images/Rosa_Labrador/Rosa_the_Labrador_QR_Code.png",
    ],
    "https://square.link/u/NjOMbrIa",
  ),
];

// Render product cards
const productContainer = document.getElementById("product-list");
products.forEach((product) => {
  productContainer.appendChild(product.renderCard());
});

//LAZY LOADING

document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".product-card");

  const lazyLoadProduct = (product) => {
    const img = product.querySelector("img");
    const dataSrc = img.getAttribute("data-src");
    img.setAttribute("src", dataSrc);
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        lazyLoadProduct(entry.target);
        observer.unobserve(entry.target); //Stop Observing once loaded
      }
    });
  });
  productCards.forEach((card) => {
    observer.observe(card);
  });
});

function updateMainImage(imageSrc) {
  const displayedImage = document.getElementById("displayed-image");

  // Add the hidden class to fade out the image
  displayedImage.classList.add("hiddenfade");

  // Use a timeout to wait for the fade-out transition to finish
  setTimeout(() => {
    displayedImage.src = imageSrc; // Change the image source
    displayedImage.classList.remove("hiddenfade"); // Fade it in again
  }, 500); // This should match the transition duration in CSS
}
