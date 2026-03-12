//Animation for Nav Links

document.querySelectorAll(".nav-link").forEach((item) => {
  const fullText = item.getAttribute("data-full");
  // const shortText = document.getElementsByClassName("short_text");

  //Remove Short text
  //   shortText.classList.add("hidden");

  // Create a span element with the full text
  const span = document.createElement("span");
  span.classList.add("mt-5");
  span.classList.add("d-inline-block");

  span.textContent = `${fullText}`;

  //Add the span element after short text

  item.appendChild(span);
});

//kindness counter on Home page
document.addEventListener("DOMContentLoaded", () => {
  const counter = { value: 0 };

  gsap
    .timeline()
    .from(".kindness-counter", {
      y: 20,
      opacity: 0,
      duration: 1,
    })
    .to(counter, {
      value: 0,
      duration: 2,
      delay: 2,
      ease: "power2.out",

      onUpdate: () => {
        document.getElementById("kindnessCount").textContent = Math.floor(
          counter.value,
        ).toLocaleString();
      },

      onComplete: () => {
        gsap.fromTo(
          ".kindness-counter",
          { scale: 1 },
          { scale: 1.05, duration: 0.5, yoyo: true, repeat: 1 },
        );
      },
    });
});

//Main image updater for gallery and home page

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

// function updateMainImage(imageSrc) {
//   document.getElementById("displayed-image").src = imageSrc;
// }

function updateMainImage2(imageSrc) {
  document.getElementById("displayed-image-2").src = imageSrc;
}

// Lightbox functionality
const modal = document.getElementById("front-image-modal");
const frontModalImg = document.getElementById("front-modal-image");
const mainImg = document.getElementById("displayed-image");
const closeBtn = document.querySelector(".front-close");
const nextBtn = document.querySelector(".front-next");
const prevBtn = document.querySelector(".front-prev");
const thumbnails = document.querySelectorAll(".thumbnail img");

let currentIndex = 0;

// Create image array from thumbnails
const imageList = Array.from(thumbnails).map((img) => img.src);

// Open modal
mainImg.addEventListener("click", function () {
  currentIndex = imageList.indexOf(this.src);
  openModal();
});

function openModal() {
  modal.classList.add("show");
  frontModalImg.src = imageList[currentIndex];
}

// Close modal
function closeModal() {
  modal.classList.remove("show");
}

// Next image
function showNext() {
  currentIndex = (currentIndex + 1) % imageList.length;
  frontModalImg.src = imageList[currentIndex];
  mainImg.src = imageList[currentIndex];
}

// Previous image
function showPrev() {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  frontModalImg.src = imageList[currentIndex];
  mainImg.src = imageList[currentIndex];
}

// Event Listeners
closeBtn.addEventListener("click", closeModal);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

// Click outside image closes
modal.addEventListener("click", function (e) {
  if (e.target === modal) closeModal();
});

// Keyboard Support
document.addEventListener("keydown", function (e) {
  if (!modal.classList.contains("show")) return;

  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});
