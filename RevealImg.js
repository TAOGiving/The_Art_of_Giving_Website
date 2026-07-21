// Reveal Painting on Hover

const container = document.getElementById("reveal-container");
const painting = document.getElementById("painting-img");

let lastRevealPercent = 0;

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const xPos = e.clientX - rect.left;
  const revealPercent = (xPos / rect.width) * 100;

  lastRevealPercent = revealPercent;

  painting.style.clipPath = `inset(0 ${100 - revealPercent}% 0 0)`;
});

container.addEventListener("mouseleave", () => {
  // If mouse leaves on the left side → show original
  if (lastRevealPercent < 50) {
    painting.style.clipPath = `inset(0 100% 0 0)`; // hide painting
  }
  // If mouse leaves on the right side → show painting
  else {
    painting.style.clipPath = `inset(0 0% 0 0)`; // fully reveal painting
  }
});
