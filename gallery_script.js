/* -------- Configuration -------- */
const maxTilt = 15; // degrees, change to 30+ for more dramatic tilt
const scaleOnHover = 1.06; // scale for hovered/active look
const lerpFactor = 0.12; // animation smoothness (0-1), higher = snappier
const disableOnTouch = true; // disable tilt on touch devices by default

/* -------- Helpers -------- */
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const isTouchDevice = () =>
  "ontouchstart" in window || navigator.maxTouchPoints > 0;

/* -------- Setup elements & state -------- */
const wrappers = Array.from(document.querySelectorAll(".tilt-wrapper"));
const images = wrappers.map((w) => w.querySelector(".img-inner"));
const gallery = document.getElementById("gallery");
const modalEl = document.getElementById("lightboxModal");
const bootstrapModal = new bootstrap.Modal(modalEl);
const modalImg = document.getElementById("lightboxImage");

let centers = []; // cached centers for each wrapper {cx, cy, w, h}
let animating = false;
let mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  inside: false,
};
let isTouch = isTouchDevice() && disableOnTouch;
let rAFId = null;
let modalOpen = false;
let currentIndex = 0;

/* init per-wrapper state */
wrappers.forEach((w) => {
  w._current = { rx: 0, ry: 0, s: 1 };
  w._target = { rx: 0, ry: 0, s: 1 };
  w.style.transformStyle = "preserve-3d";
});

/* compute centers (call on load, resize, scroll) */
function updateCenters() {
  centers = wrappers.map((w) => {
    const rect = w.getBoundingClientRect();
    return {
      cx: rect.left + rect.width / 2,
      cy: rect.top + rect.height / 2,
      w: rect.width,
      h: rect.height,
    };
  });
}
updateCenters();

/* debounced resize/scroll updating */
let resizeTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    updateCenters();
  }, 120);
});
window.addEventListener("scroll", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    updateCenters();
  }, 120);
});

/* pointer handling (use pointer events when available) */
const MOVEEVENT = window.PointerEvent ? "pointermove" : "mousemove";
const ENTER = window.PointerEvent ? "pointerenter" : "mouseenter";
const LEAVE = window.PointerEvent ? "pointerleave" : "mouseleave";

function onPointerMove(e) {
  if (isTouch || modalOpen) return;
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  mouse.inside = true;
  // update targets for each wrapper
  wrappers.forEach((w, i) => {
    const c = centers[i];
    if (!c) return;
    // vector from wrapper center to mouse
    const dx = mouse.x - c.cx;
    const dy = mouse.y - c.cy;

    // normalize relative to viewport (so effect is consistent across screen)
    const nx = dx / (window.innerWidth / 2);
    const ny = dy / (window.innerHeight / 2);

    // target rotations — clamp to [-maxTilt, maxTilt]
    const targetRY = clamp(nx * maxTilt, -maxTilt, maxTilt); // rotateY (left<->right)
    const targetRX = clamp(-ny * maxTilt, -maxTilt, maxTilt); // rotateX (top<->bottom)

    w._target.rx = targetRX;
    w._target.ry = targetRY;
    w._target.s = scaleOnHover;
  });

  // ensure animation loop running
  if (!animating) {
    animating = true;
    rAFId = requestAnimationFrame(animate);
  }
}

function onPointerLeave(e) {
  // when pointer leaves viewport or gallery, ease back to zero
  mouse.inside = false;
  wrappers.forEach((w) => {
    w._target.rx = 0;
    w._target.ry = 0;
    w._target.s = 1;
  });
  if (!animating) {
    animating = true;
    rAFId = requestAnimationFrame(animate);
  }
}

/* animation loop: lerp current towards target and apply transform */
function animate() {
  let needsFrame = false;
  wrappers.forEach((w) => {
    const cur = w._current;
    const tgt = w._target;

    // lerp each property
    cur.rx = lerp(cur.rx || 0, tgt.rx, lerpFactor);
    cur.ry = lerp(cur.ry || 0, tgt.ry, lerpFactor);
    cur.s = lerp(cur.s || 1, tgt.s, lerpFactor);

    // apply transform
    const transform = `perspective(1200px) rotateX(${cur.rx.toFixed(
      3
    )}deg) rotateY(${cur.ry.toFixed(3)}deg) scale(${cur.s.toFixed(4)})`;
    w.style.transform = transform;

    // detect if still animating (close enough)
    if (
      Math.abs(cur.rx - tgt.rx) > 0.01 ||
      Math.abs(cur.ry - tgt.ry) > 0.01 ||
      Math.abs(cur.s - tgt.s) > 0.001
    ) {
      needsFrame = true;
    }
  });

  if (needsFrame) {
    rAFId = requestAnimationFrame(animate);
  } else {
    animating = false;
    cancelAnimationFrame(rAFId);
  }
}

/* disable tilt on touch devices to prevent interference with scroll */
if (!isTouch) {
  window.addEventListener(MOVEEVENT, onPointerMove, { passive: true });
  window.addEventListener("mouseout", (e) => {
    // when cursor leaves window (relatedTarget == null) reset
    if (!e.relatedTarget) onPointerLeave();
  });
  // reset on window blur
  window.addEventListener("blur", onPointerLeave);
} else {
  // optional: you can enable a gentle follow on touchmove if you want
  // document.addEventListener('touchmove', ... );
}

/* -------- Modal / Lightbox logic (prev/next/keyboard) -------- */
const allImages = Array.from(
  document.querySelectorAll(".tilt-wrapper .img-inner")
);

allImages.forEach((img, idx) => {
  img.dataset.index = idx;
  img.addEventListener("click", () => {
    currentIndex = idx;
    openModal(idx);
  });
});

function openModal(idx) {
  modalImg.src = allImages[idx].src;
  bootstrapModal.show();
  modalOpen = true;
}

function closeModal() {
  bootstrapModal.hide();
  modalOpen = false;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
  modalImg.src = allImages[currentIndex].src;
});
document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % allImages.length;
  modalImg.src = allImages[currentIndex].src;
});

/* pause tilt while modal is open */
modalEl.addEventListener("shown.bs.modal", () => {
  modalOpen = true;
});
modalEl.addEventListener("hidden.bs.modal", () => {
  modalOpen = false;
  // gently reset tilt when modal closed
  onPointerLeave();
});

/* keyboard navigation (only when modal is shown) */
document.addEventListener("keydown", (e) => {
  if (!modalOpen) return;
  if (e.key === "ArrowLeft") document.getElementById("prevBtn").click();
  if (e.key === "ArrowRight") document.getElementById("nextBtn").click();
  if (e.key === "Escape") bootstrapModal.hide();
});
