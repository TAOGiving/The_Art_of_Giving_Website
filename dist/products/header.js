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
