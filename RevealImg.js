// Reveal Painting on Hover
const container = document.getElementById("reveal-container");
const painting = document.getElementById("painting-img");

let lastRevealPercent = 0;

// --- Mouse movement ---
container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const xPos = e.clientX - rect.left;
  updateReveal(xPos, rect.width);
});

container.addEventListener("mouseleave", () => {
  lockFinalState();
});

// --- Touch movement (mobile/tablet) ---
container.addEventListener("touchmove", (e) => {
  const rect = container.getBoundingClientRect();
  const touch = e.touches[0];
  const xPos = touch.clientX - rect.left;
  updateReveal(xPos, rect.width);
});

container.addEventListener("touchend", () => {
  lockFinalState();
});

// --- Shared logic ---
function updateReveal(xPos, width) {
  const revealPercent = Math.max(0, Math.min(100, (xPos / width) * 100));
  lastRevealPercent = revealPercent;
  painting.style.clipPath = `inset(0 ${100 - revealPercent}% 0 0)`;
}

function lockFinalState() {
  if (lastRevealPercent < 50) {
    // Show original
    painting.style.clipPath = `inset(0 100% 0 0)`;
  } else {
    // Show painting
    painting.style.clipPath = `inset(0 0% 0 0)`;
  }
}
