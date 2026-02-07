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

//*****************************/
// OOP Product card constructer
//*****************************/

// JavaScript code to generate a product card and modal
class Product {
  constructor(
    name,
    productCode,
    price,
    description,
    longDescription,
    imageUrls,
    charLimits,
  ) {
    this.name = name;
    this.ProductCode = productCode;
    this.price = price;
    this.description = description;
    this.longDescription = longDescription;
    this.imageUrls = imageUrls; //Array of image URLS
    // this.baseImage = "Images/Heart logo.png";
    this.charLimits = charLimits;
  }

  renderCard() {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.classList.add("product");
    card.classList.add("col-md-2");
    card.classList.add("col-5");
    // card.classList.add("m-3");

    const img = document.createElement("img");
    // img.src = this.baseImage;
    img.src = this.imageUrls[0];
    img.alt = this.name;
    img.id = "product-image";
    img.dataset.src = this.imageUrls[0]; //Display the first image in the card
    // img.classList.add("lazy-img");
    card.appendChild(img);
    console.log(img.dataset.src);

    const title = document.createElement("h2");
    title.innerHTML = this.name;
    title.classList.add("handlee-regular");
    card.appendChild(title);

    const desc = document.createElement("p");
    desc.classList.add("handlee-regular");
    desc.textContent = this.description;
    // card.appendChild(desc);

    const price = document.createElement("span");
    price.classList.add("price");
    price.classList.add("handlee-regular");
    price.textContent = `£${this.price}`;
    card.appendChild(price);

    const atbButton = document.createElement("button");
    atbButton.classList.add("btn");
    atbButton.classList.add("btn-warning");
    atbButton.classList.add("btn-sm");
    atbButton.classList.add("mb-2");
    atbButton.classList.add("mx-2");
    atbButton.classList.add("handlee-regular");
    atbButton.textContent = "Personalise Me";
    // atbButton.onclick = () => {
    //   addToCart(this.name, this.price, this.imageUrls[0]);
    // };
    card.appendChild(atbButton);

    const bnButton = document.createElement("button");
    bnButton.classList.add("btn");
    bnButton.classList.add("btn-outline-success");
    bnButton.classList.add("btn-sm");
    bnButton.classList.add("mb-2");
    bnButton.classList.add("mx-2");
    bnButton.classList.add("handlee-regular");
    bnButton.textContent = "More Info";
    card.appendChild(bnButton);

    // Event listener for opening the modal
    img.addEventListener("click", () => {
      this.openModal();
    });

    title.addEventListener("click", () => {
      this.openModal();
    });

    desc.addEventListener("click", () => {
      this.openModal();
    });
    price.addEventListener("click", () => {
      this.openModal();
    });
    bnButton.addEventListener("click", () => {
      this.openModal();
    });

    return card;
  }

  openModal() {
    // Get modal elements
    const modal = document.getElementById("product-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalProductCode = document.getElementById("modal-product-code");
    const modalImage = document.getElementById("modal-image");
    // const personalisationInputs = document.getElementById(
    //   "personalisation-inputs"
    // );
    const modalDescription = document.getElementById("modal-description");
    const modalLongDescription = document.getElementById(
      "modal-longDescription",
    );
    const modalAddToCart = document.getElementById("modal-add-to-cart");
    // const addToCartBtn = document.querySelector(".addToCartBtn");
    const modalPrice = document.getElementById("modal-price");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const prevButtonMobile = document.querySelector(".prev-mobile");
    const nextButtonMobile = document.querySelector(".next-mobile");

    let currentSlideIndex = 0;

    // Set modal content based on product details
    modalTitle.innerHTML = this.name;
    modalProductCode.textContent = this.ProductCode;
    modalImage.src = this.imageUrls[currentSlideIndex];
    modalDescription.textContent = this.description;
    modalLongDescription.innerHTML = this.longDescription;
    modalPrice.textContent = `£${this.price}`;

    // Function to show the current slide
    const showSlide = (index) => {
      currentSlideIndex =
        (index + this.imageUrls.length) % this.imageUrls.length;
      modalImage.src = this.imageUrls[currentSlideIndex];
      console.log("show current slide function");
    };

    function updateCharCount(input) {
      const maxlength = input.maxLength;
      console.log("maxLength", maxlength);
      const charCount = input.nextElementSibling;
      console.log("charCount", charCount);
      //The corresponding Span is the next sibling of the input
      const remaining = maxlength - input.value.length;
      charCount.textContent = `${remaining}`;
    }

    //Set up character countdown for all inputs in the model
    function setUpModalInputs() {
      document.querySelectorAll(".personalisation-input").forEach((input) => {
        //Initial character count update
        updateCharCount(input);

        //Listen for input event and update character count
        input.addEventListener("input", () => updateCharCount(input));
      });
    }

    // Event listener for add to cart button
    // addToCartBtn.onclick = () => {
    //   addToCart(this.name, this.price, this.imageUrls[0]);
    // };

    // Event listeners for prev/next buttons
    prevButton.onclick = () => showSlide(currentSlideIndex - 1);
    nextButton.onclick = () => showSlide(currentSlideIndex + 1);
    prevButtonMobile.onclick = () => showSlide(currentSlideIndex - 1);
    nextButtonMobile.onclick = () => showSlide(currentSlideIndex + 1);

    // Display the modal
    modal.style.display = "block";
    setUpModalInputs();

    // Disable Body Scroll
    modal.style.overflow = "hidden";

    // Clear previous input values and errors
    const personalisationInputQTY = document.getElementsByClassName(
      "personalisation-input",
    ).length;
    for (let i = 1; i <= personalisationInputQTY; i++) {
      document.getElementById(`personalisation-input-${i}`).value = "";
      // document.getElementById(`personalisation-error-${i}`).textContent = "";
    }

    //Set the character limits dynamically for each line
    this.charLimits.forEach((limit, index) => {
      const LineNum = index + 1;
      const charLimitLineNum = document.getElementById(`char-limit-${LineNum}`);
      charLimitLineNum.textContent = limit;
      // document
      //   .getElementById(`personalisation-input-${LineNum}`)
      //   .setAttribute("maxlength", limit);

      // Validation and adding product to cart
      modalAddToCart.onclick = () => {
        const personalisationText = [];
        let isValid = true;

        // Validate each line of personalisation
        for (let i = 1; i <= personalisationInputQTY; i++) {
          const input = document.getElementById(`personalisation-input-${i}`);
          const error = document.getElementById(`personalisation-error-${i}`);
          const text = input.value.trim();

          //If input is required (you can make it optional by adjusting this condition)
          // if (text.length < 1) {
          //   error.textContent = `Line ${i} must have at least 1 character.`;
          //   error.classList.remove("d-none");
          //   isValid = false;
          // } else

          if (text.length > this.charLimits[i - 1]) {
            error.textContent = `Line ${i} cannot exceed ${
              this.charLimits[i - 1]
            } characters.`;
            isValid = false;
          } else {
            // error.textContent = ""; // Clear error message
            personalisationText.push(text);
            // error.classList.add("d-none");
          }
        }
        if (isValid) {
          addToCart(
            this.name,
            this.ProductCode,
            this.price,
            this.imageUrls[0],
            personalisationText,
          );

          // const toastTrigger = document.getElementById("modal-add-to-cart");
          const toastLiveExample = document.getElementById("liveToast");

          // if (toastTrigger) {
          const toastBootstrap =
            bootstrap.Toast.getOrCreateInstance(toastLiveExample);
          // toastTrigger.addEventListener("click", () => {
          toastBootstrap.show();
          // });
        }

        // modal.style.display = "none"; // Close modal
      };
    });
  }
}

//Get references to the input field and countdown display
// function characterCount() {
//   for (let i = 1; i <= 4; i++) {
//     const input = document.getElementsByClassName(`personalisation-input-${i}`);
//     const charCount = document.getElementsByClassName("text-counter");
//     console.log(this.input.length);
//     console.log(charCount);
//     const currentLength = input.length;
//     const remaining = maxChar - currentLength;
//     console.log(currentLength);
//     console.log(remaining);
//     charCount.textContent = `${remaining} characters remaining`;
//   }
// }

// }
// Modal close functionality
const modal = document.getElementById("product-modal");
const closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function () {
  modal.style.display = "none";
};

const cancelBtn = document.getElementsByClassName("cancelBtn")[0];

cancelBtn.onclick = function () {
  modal.style.display = "none";
};
// Close modal if the user clicks outside the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll(".needs-validation");

//   // Loop over them and prevent submission
//   Array.from(forms).forEach((form) => {
//     form.addEventListener(
//       "submit",
//       (event) => {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//         }

//         form.classList.add("was-validated");
//       },
//       false
//     );
//   });
// })();

// Example usage

const products = [
  new Product(
    `<strong>Personalised Golden Christmas Bell Decoration<span class="d-none">Christmas Decorations Baby</span></strong>`,
    "P1004A24",
    9.99,
    "Our Personalised Golden Christmas Bell Decoration is a fantastic way of adding a personalised touch to your festive celebrations.",
    `Personalise this metal decoration with four lines of text as below<BR><BR>Line 1 - 4 characters<BR>Line 2 - 13 characters<BR>Line 3 - 13 characters<BR>Line 4 - 12 characters<BR><BR>Please note, all personalisation is case sensitive and will appear as entered.<BR><BR>This decoration comes supplied with a ribbon ready to hang - colour of ribbon may vary.<BR><BR>Ideal for Christmas.<BR><BR><div id="personalisation-inputs" class="row align-items-center justfy-content-between mt-4"><div class="row align-items-center mb-2">
  <div class="row">
  <div class="col-md-6"><label for="personalisation-input-1" class="col-form-label">Line 1 (up to <span>4</span> characters):</label></div>
  <div class="col-md-6 d-inline-flex"><input type="text" id="personalisation-input-1" class="form-control personalisation-input" aria-describedby="Line 1 input" data-mdb-show-counter="true" maxlength="4" placeholder="Enter text" required>
  <span id="char-limit-1" class="input-group-text text-counter justify-content-center px-3 col-md-1"></span></div>
  </div>
  </div><div class="row align-items-center mb-2">
  <div class="row">
  <div class="col-md-6"><label for="personalisation-input-2" class="col-form-label">Line 2 (up to <span>13</span> characters):</label></div>
  <div class="col-md-6 d-inline-flex"><input type="text" id="personalisation-input-2" class="form-control personalisation-input" aria-describedby="Line 2 input" data-mdb-show-counter="true" maxlength="13" placeholder="Enter text" required>
  <span id="char-limit-2" class="input-group-text text-counter justify-content-center px-3 col-md-1"></span></div>
  </div>
  </div><div class="row align-items-center mb-2">
  <div class="row">
  <div class="col-md-6"><label for="personalisation-input-3" class="col-form-label">Line 3 (up to <span>13</span> characters):</label></div>
  <div class="col-md-6 d-inline-flex"><input type="text" id="personalisation-input-3" class="form-control personalisation-input" aria-describedby="Line 3 input" data-mdb-show-counter="true" maxlength="13" placeholder="Enter text" required>
  <span id="char-limit-3" class="input-group-text text-counter justify-content-center px-3 col-md-1"></span></div>
  </div>
  </div><div class="row align-items-center mb-2">
  <div class="row">
  <div class="col-md-6"><label for="personalisation-input-4" class="col-form-label">Line 4 (up to <span>12</span> characters):</label></div>
  <div class="col-md-6 d-inline-flex"><input type="text" id="personalisation-input-4" class="form-control personalisation-input" aria-describedby="Line 4 input" data-mdb-show-counter="true" maxlength="12" placeholder="Enter text" required>
  <span id="char-limit-4" class="input-group-text text-counter justify-content-center px-3 col-md-1"></span></div>
  </div>
  </div>`,
    [
      "Product Images/P1004A24.jpg",
      "Product Images/P1004A24_1.jpg",
      "Product Images/P1004A24_1.jpg",
      "Product Images/P1004A24_2.jpg",
      "Product Images/P1004A24_3.jpg",
      "Product Images/P1004A24_4.jpg",
    ],
    [4, 13, 13, 12],
  ),
];

if (document.getElementById("shop-page")) {
  // Render product cards
  const productContainer = document.getElementById("product-list");
  products.forEach((product) => {
    productContainer.appendChild(product.renderCard());
  });
}

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
