//***********************************************/
//**************** GSAP Animations  *************/
//***********************************************/

gsap.registerPlugin(ScrollTrigger, SplitText); // Register the SplitText plugin

document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("visited")) {
    let split, animation;

    // Initialize SplitText
    split = new SplitText(".text_animation", { type: "words, chars" });

    document.addEventListener("DOMContentLoaded", () => {
      gsap.registerPlugin(SplitText);
      animation && animation.revert(); // Revert any existing animation
      animation = gsap.from(split.chars, {
        delay: 3.5,
        x: 150,
        opacity: 0,
        duration: 0.4,
        ease: "power4",
        stagger: 0.02,
      });
      console.log("GSAP Animation Initialized");
    });
  }

  sessionStorage.setItem("visited", "true");
});
document.addEventListener("DOMContentLoaded", () => {
  // Timeline for smooth sequencing
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // CTA buttons (bounce in a bit)
  tl.from(
    ".hero .cta-btn",
    {
      // scale: 0.8,

      opacity: 0,
      stagger: 0.5,
      duration: 0.5,
    },
    "-=0.2"
  );
});

document.addEventListener("DOMContentLoaded", () => {
  // Timeline for smooth sequencing
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Navbar: logo/profile + links
  tl.from(".navbar .logo", {
    y: -30,
    opacity: 0,
    duration: 0.4,
    delay: 1,
  }).from(
    ".navbar a",
    {
      y: -20,
      opacity: 0,
      stagger: 0.2,
      duration: 0.75,
    },
    "-=0.3"
  );

  // Hero: heading + subheading
  tl.from(".hero h5", {
    y: 40,
    opacity: 0,
    duration: 0.5,
  })
    .from(".hero h1", {
      y: 40,
      opacity: 0,
      duration: 0.5,
    })
    .from(
      ".hero h2",
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.4"
    );
});

// Select all paragraphs in the "How it works" section
document.querySelectorAll(".about-text p").forEach((p, i) => {
  gsap.from(p, {
    x: i % 2 === 0 ? -50 : 50, // alternate sides
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: p,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});

gsap.from(".about-heading", {
  opacity: 0,
  y: 30,
  scale: 0.95,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-heading",
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

// Bootstrap Icons (mask reveal instead of stroke-draw)
gsap.utils.toArray(".about-icon").forEach((icon) => {
  gsap.from(icon, {
    clipPath: "inset(0 100% 0 0)", // wipe from right to left
    duration: 3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: icon,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
});

// Progress Bar Logic

let progress = 0;
const bar = document.getElementById("progress-bar");

// Simulated progress until page is ready
const progressInterval = setInterval(() => {
  progress += Math.random() * 15; // adds variance for realism
  if (progress > 90) progress = 90; // wait for actual load finish
  bar.style.width = progress + "%";
}, 200);

/* When loading completes */
window.addEventListener("load", () => {
  clearInterval(progressInterval);

  // Fill to 100% smoothly
  bar.style.width = "100%";

  setTimeout(() => {
    document.getElementById("loader").style.opacity = 0;
    document.getElementById("page").classList.add("visible");
  }, 400);

  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 1000);
});

/* Fade-out navigation */
document.querySelectorAll("a").forEach((link) => {
  if (link.host === location.host) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("page").style.opacity = 0;
      setTimeout(() => (location = link.href), 600);
    });
  }
});

const form = document.getElementById("process-form");
const submitButton = document.getElementById("contactSend");

// This function is called when hCaptcha is successfully completed
function onHCaptchaSuccess() {
  submitButton.disabled = false; // Enable the submit button
}

// This function is called when hCaptcha is reset
function onHCaptchaReset() {
  submitButton.disabled = true; // Disable the submit button again
}

// Attach event listener to the form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const hCaptchaResponse = hcaptcha.getResponse();
  if (!hCaptchaResponse) {
    alert("Please complete the hCaptcha challenge before submitting the form.");
    return; // Prevent submission
  } else {
    form.submit();
  } // Proceed with form submission
});

//Javascript from TAOG for Pricing page
let widthInput = document.getElementById("WidthInput");
let heightInput = document.getElementById("HeightInput");

let widthOutput = document.getElementById("WidthTotal");
let heightOutput = document.getElementById("HeightTotal");
let subjectOutput = document.getElementById("SubjectTotal");
let colourOutput = document.getElementById("ColourTotal");
let finishOutput = document.getElementById("FinishTotal");
let backgroundOutput = document.getElementById("backgroundTotal");
let quoteTotal = document.getElementById("QuoteTotal");
let quoteTotalLG = document.getElementById("QuoteTotalLG");
let oneSubject = document.getElementById("oneSubject");
let twoSubject = document.getElementById("twoSubjects");
let threeSubject = document.getElementById("threeSubjects");
let blackAndWhite = document.getElementById("black_white");
let colourElement = document.getElementById("colour");
let minimalBackground = document.getElementById("minimal_background");
let complexBackground = document.getElementById("complex_background");
let a4Element = document.getElementById("a4Input");
let a3Element = document.getElementById("a3Input");
let a2Element = document.getElementById("a2Input");
let a1Element = document.getElementById("a1Input");
let noFinishElement = document.getElementById("noFinish");
let glossFinishElement = document.getElementById("glossFinish");
let matteFinishElement = document.getElementById("matteFinish");

let widthValue = localStorage.getItem("width");
let heightValue = localStorage.getItem("height");
let subjectValue = localStorage.getItem("subjects");
let colourValue = localStorage.getItem("colour");
let finishValue = localStorage.getItem("finish");
let backgroundValue = localStorage.getItem("background");
let totalValue = localStorage.getItem("total");

let formWidth = document.getElementById("formWidth");
let formHeight = document.getElementById("formHeight");
let formSubject = document.getElementById("formSubject");
let formColour = document.getElementById("formColour");
let formFinish = document.getElementById("formFinish");
let formBackground = document.getElementById("formBackground");
let formQuoteTotal = document.getElementById("formQuoteTotal");

function widthUpdater(newValue) {
  widthOutput.value = newValue;
  localStorage.setItem("width", newValue);
}

function heightUpdater(newValue) {
  heightOutput.value = newValue;
  localStorage.setItem("height", newValue);
}

function a4papersizeUpdater() {
  widthInput.value = 21.0;
  widthOutput.value = 21.0;
  localStorage.setItem("width", 21.0);
  heightOutput.value = 29.7;
  heightInput.value = 29.7;
  localStorage.setItem("height", 29.7);
  a4Element.style.backgroundColor = "var(--burnt_terracotta) !important";
  a3Element.style.backgroundColor = "";
  a2Element.style.backgroundColor = "";
  a1Element.style.backgroundColor = "";
  a4Element.textContent = "A4 Selected";
  a3Element.textContent = "A3 (29.7cm x 42.0cm)";
  a2Element.textContent = "A2 (42.0cm x 59.4cm)";
  a1Element.textContent = "A1 (59.4cm x 84.1cm)";
}

function a3papersizeUpdater() {
  widthInput.value = 29.7;
  widthOutput.value = 29.7;
  localStorage.setItem("width", 29.7);
  heightOutput.value = 42.0;
  heightInput.value = 42.0;
  localStorage.setItem("height", 42.0);
  a4Element.style.backgroundColor = "";
  a3Element.style.backgroundColor = "var(--burnt_terracotta) !important";
  a2Element.style.backgroundColor = "";
  a1Element.style.backgroundColor = "";
  a4Element.textContent = "A4 (21.0cm x 29.7cm)";
  a3Element.textContent = "A3 Selected";
  a2Element.textContent = "A2 (42.0cm x 59.4cm)";
  a1Element.textContent = "A1 (59.4cm x 84.1cm)";
}

function a2papersizeUpdater() {
  widthInput.value = 42.0;
  widthOutput.value = 42.0;
  localStorage.setItem("width", 42.0);
  heightOutput.value = 59.4;
  heightInput.value = 59.4;
  localStorage.setItem("height", 59.4);
  a4Element.style.backgroundColor = "";
  a3Element.style.backgroundColor = "";
  a2Element.style.backgroundColor = "var(--burnt_terracotta) !important";
  a1Element.style.backgroundColor = "";
  a4Element.textContent = "A4 (21.0cm x 29.7cm)";
  a3Element.textContent = "A3 (29.7cm x 42.0cm)";
  a2Element.textContent = "A2 Selected";
  a1Element.textContent = "A1 (59.4cm x 84.1cm)";
}

function a1papersizeUpdater() {
  widthInput.value = 59.4;
  widthOutput.value = 59.4;
  localStorage.setItem("width", 59.4);
  heightOutput.value = 84.1;
  heightInput.value = 84.1;
  localStorage.setItem("height", 84.1);
  a4Element.style.backgroundColor = "";
  a3Element.style.backgroundColor = "";
  a2Element.style.backgroundColor = "";
  a1Element.style.backgroundColor = "var(--burnt_terracotta) !important";
  a4Element.textContent = "A4 (21.0cm x 29.7cm)";
  a3Element.textContent = "A3 (29.7cm x 42.0cm)";
  a2Element.textContent = "A2 (42.0cm x 59.4cm)";
  a1Element.textContent = "A1 Selected";
}

function unhideSubjects() {
  if (!widthInput.value || !heightInput.value) {
    alert("Please enter both Width and Height to proceed.");
  } else if (widthInput.value && heightInput.value) {
    const subjectsDiv = document.getElementById("subjects_hidden");
    const scrollToSubjects = document.getElementById("scrollToSubjects");
    console.log(subjectsDiv);
    subjectsDiv.classList.remove("hidden");
    scrollToSubjects.scrollIntoView();
  }
}

//Subjects functions:
function oneSubjects() {
  subjectOutput.value = "One Subject";
  localStorage.setItem("subjects", "One Subject");
  oneSubject.style.backgroundColor = "var(--burnt_terracotta) !important";
  oneSubject.textContent = "Selected";
  twoSubject.style.backgroundColor = "";
  twoSubject.textContent = "Can I have 2 subjects please";
  threeSubject.style.backgroundColor = "";
  threeSubject.textContent = "I have a big Family, 3 for me!";
}
function twoSubjects() {
  subjectOutput.value = "Two Subjects";
  localStorage.setItem("subjects", "Two Subjects");
  twoSubject.style.backgroundColor = "var(--burnt_terracotta) !important";
  twoSubject.textContent = "Selected";
  oneSubject.style.backgroundColor = "";
  oneSubject.textContent = "I want one subject in my painting";
  threeSubject.style.backgroundColor = "";
  threeSubject.textContent = "I have a big Family, 3 for me!";
}

function threeSubjects() {
  subjectOutput.value = "Three Subjects";
  localStorage.setItem("subjects", "Three Subjects");
  threeSubject.style.backgroundColor = "var(--burnt_terracotta) !important";
  threeSubject.textContent = "Selected";
  oneSubject.style.backgroundColor = "";
  oneSubject.textContent = "I want one subject in my painting";
  twoSubject.style.backgroundColor = "";
  twoSubject.textContent = "Can I have 2 subjects please";
}

function unhideColour() {
  if (
    oneSubject.textContent === "Selected" ||
    twoSubject.textContent === "Selected" ||
    threeSubject.textContent === "Selected"
  ) {
    const coloursDiv = document.getElementById("colour_hidden");
    const scrollToColours = document.getElementById("scrollToColours");
    console.log(coloursDiv);
    coloursDiv.classList.remove("hidden");
    scrollToColours.scrollIntoView();
  }
}

function blackWhite() {
  colourOutput.value = "Black and White";
  localStorage.setItem("colour", "Black and White");
  blackAndWhite.style.backgroundColor = "var(--burnt_terracotta) !important";
  blackAndWhite.textContent = "Selected";
  colourElement.style.backgroundColor = "";
  colourElement.textContent = "Colour, colour, colour!";
}

function colour() {
  colourOutput.value = "Full Colour";
  localStorage.setItem("colour", "Full Colour");
  blackAndWhite.style.backgroundColor = "";
  blackAndWhite.textContent = "Monochrome please";
  colourElement.style.backgroundColor = "var(--burnt_terracotta) !important";
  colourElement.textContent = "Selected";
}

function unhideBackground() {
  if (
    blackAndWhite.textContent === "Selected" ||
    colourElement.textContent === "Selected"
  ) {
    const backgroundDiv = document.getElementById("background_hidden");
    const scrollToBackground = document.getElementById("scrollToBackground");
    backgroundDiv.classList.remove("hidden");
    scrollToBackground.scrollIntoView();
  }
}

function minimal_Background() {
  backgroundOutput.value = "Minimal Background";
  localStorage.setItem("background", "Minimal Background");
  complexBackground.style.backgroundColor = "";
  complexBackground.textContent = "Full Detailed Background";
  minimalBackground.style.backgroundColor =
    "var(--burnt_terracotta) !important";
  minimalBackground.textContent = "Selected";
}

function complex_Background() {
  backgroundOutput.value = "Complex Background";
  localStorage.setItem("background", "Complex Background");
  complexBackground.style.backgroundColor =
    "var(--burnt_terracotta) !important";
  complexBackground.textContent = "Selected";
  minimalBackground.style.backgroundColor = "";
  minimalBackground.textContent = "Minimal";
}

function unhideFinish() {
  if (
    minimalBackground.textContent === "Selected" ||
    complexBackground.textContent === "Selected"
  ) {
    const finishDiv = document.getElementById("finish_hidden");
    const scrollToFinish = document.getElementById("scrollToFinish");
    finishDiv.classList.remove("hidden");
    scrollToFinish.scrollIntoView();
  }
}

function noFinish() {
  finishOutput.value = "No Finish";
  localStorage.setItem("finish", "No Finish");
  noFinishElement.style.backgroundColor = "var(--burnt_terracotta) !important";
  noFinishElement.textContent = "Selected";
  noFinishElement.style.color = "white";
  glossFinishElement.style.backgroundColor = "";
  glossFinishElement.textContent = "Glass Like Finish";
  matteFinishElement.style.backgroundColor = "";
  matteFinishElement.textContent = "Premium Finish";
}

function glossFinish() {
  finishOutput.value = "Gloss Finish";
  localStorage.setItem("finish", "Gloss Finish");
  noFinishElement.style.backgroundColor = "";
  noFinishElement.textContent = "No Finish";
  noFinishElement.style.color = "";
  glossFinishElement.style.backgroundColor =
    "var(--burnt_terracotta) !important";
  glossFinishElement.textContent = "Selected";
  matteFinishElement.style.backgroundColor = "";
  matteFinishElement.textContent = "Premium Finish";
}

function matteFinish() {
  finishOutput.value = "Matte Finish";
  localStorage.setItem("finish", "Matte Finish");
  noFinishElement.style.backgroundColor = "";
  noFinishElement.textContent = "No Finish";
  noFinishElement.style.color = "";
  glossFinishElement.style.backgroundColor = "";
  glossFinishElement.textContent = "Glass Like Finish";
  matteFinishElement.style.backgroundColor =
    "var(--burnt_terracotta) !important";
  matteFinishElement.textContent = "Selected";
}

function unhideQuote() {
  if (
    noFinishElement.textContent === "Selected" ||
    glossFinishElement.textContent === "Selected" ||
    matteFinishElement.textContent === "Selected"
  ) {
    const QuoteDiv = document.getElementById("quote_hidden");
    const scrollToQuote = document.getElementById("scrollToQuote");
    QuoteDiv.classList.remove("hidden");
    scrollToQuote.scrollIntoView();
  }
}

function updater() {
  if (localStorage.getItem("width") !== widthOutput) {
    widthOutput.value = localStorage.getItem("width");
  }
  if (localStorage.getItem("height") !== heightOutput) {
    heightOutput.value = localStorage.getItem("height");
  }
  if (localStorage.getItem("subjects") !== subjectOutput) {
    subjectOutput.value = localStorage.getItem("subjects");
  }
  if (localStorage.getItem("colour") !== colourOutput) {
    colourOutput.value = localStorage.getItem("colour");
  }
  if (localStorage.getItem("finish") !== finishOutput) {
    finishOutput.value = localStorage.getItem("finish");
  }
  if (localStorage.getItem("total") !== quoteTotal) {
    quoteTotal.value = localStorage.getItem("total");
  }
  if (localStorage.getItem("background") !== backgroundOutput) {
    backgroundOutput.value = localStorage.getItem("background");
  }
}

updater();

// Calculate Area of artwork

let prices = [
  300, 350, 400, 450, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
  1500, 1600, 1700, 1900, 2400, 2900, 3750,
];

let subject1 = 1;
let subjects2 = 1.25;
let subjects3 = 1.4;
let finishGloss = 1.1;
let finishMatte = 1.25;
let monochrome = 0.5;
let complexBG = 1.5;

let total = 0;

//take the area calculation and compare this with the areas pricing band.
// if area lands within a set value it brings back a price.
function totalPrice() {
  let calcArea = widthOutput.value * heightOutput.value;
  if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "No Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = (prices[0] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[0] * subject1).toFixed(2));
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (prices[1] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[1] * subject1).toFixed(2));
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[2] * subject1).toFixed(2));
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[3] * subject1).toFixed(2));
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[4] * subject1).toFixed(2));
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[5] * subject1).toFixed(2));
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[6] * subject1).toFixed(2));
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[7] * subject1).toFixed(2));
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[8] * subject1).toFixed(2));
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[9] * subject1).toFixed(2));
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[10] * subject1).toFixed(2));
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[11] * subject1).toFixed(2));
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[12] * subject1).toFixed(2));
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[13] * subject1).toFixed(2));
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[14] * subject1).toFixed(2));
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[15] * subject1).toFixed(2));
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[16] * subject1).toFixed(2));
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[17] * subject1).toFixed(2));
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[18] * subject1).toFixed(2));
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[19] * subject1).toFixed(2));
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subject1).toFixed(2);
      localStorage.setItem("total", (prices[20] * subject1).toFixed(2));
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
    console.log(heightOutput.value);
    console.log(widthOutput.value);
    console.log(subjectOutput.value);
    console.log(colourOutput.value);
    console.log(finishOutput.value);
    console.log(calcArea);
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "No Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[2] * subjects2).toFixed(2));
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[3] * subjects2).toFixed(2));
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[4] * subjects2).toFixed(2));
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[5] * subjects2).toFixed(2));
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[6] * subjects2).toFixed(2));
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[7] * subjects2).toFixed(2));
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[8] * subjects2).toFixed(2));
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[9] * subjects2).toFixed(2));
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[10] * subjects2).toFixed(2));
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[11] * subjects2).toFixed(2));
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[12] * subjects2).toFixed(2));
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[13] * subjects2).toFixed(2));
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[14] * subjects2).toFixed(2));
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[15] * subjects2).toFixed(2));
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[16] * subjects2).toFixed(2));
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[17] * subjects2).toFixed(2));
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[18] * subjects2).toFixed(2));
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[19] * subjects2).toFixed(2));
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects2).toFixed(2);
      localStorage.setItem("total", (prices[20] * subjects2).toFixed(2));
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "No Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[4] * subjects3).toFixed(2));
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[5] * subjects3).toFixed(2));
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[6] * subjects3).toFixed(2));
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[7] * subjects3).toFixed(2));
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[8] * subjects3).toFixed(2));
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[9] * subjects3).toFixed(2));
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[10] * subjects3).toFixed(2));
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[11] * subjects3).toFixed(2));
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[12] * subjects3).toFixed(2));
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[13] * subjects3).toFixed(2));
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[14] * subjects3).toFixed(2));
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[15] * subjects3).toFixed(2));
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[16] * subjects3).toFixed(2));
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[17] * subjects3).toFixed(2));
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[18] * subjects3).toFixed(2));
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[19] * subjects3).toFixed(2));
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects3).toFixed(2);
      localStorage.setItem("total", (prices[20] * subjects3).toFixed(2));
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "No Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = (prices[0] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (prices[1] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subject1 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * monochrome).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "No Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects2 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * monochrome).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "No Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects3 * monochrome).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * monochrome).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Gloss Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = (prices[0] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (prices[1] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subject1 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Gloss Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects2 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Gloss Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects3 * finishGloss).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * finishGloss).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Gloss Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = (
        prices[0] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (
        prices[1] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subject1 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Gloss Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects2 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Gloss Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects3 *
        monochrome *
        finishGloss
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * monochrome * finishGloss).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Matte Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = (prices[0] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (prices[1] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subject1 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Matte Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects2 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Matte Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects3 * finishMatte).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * finishMatte).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Matte Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = prices[0] * subject1 * monochrome * finishMatte;
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (
        prices[1] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subject1 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Matte Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects2 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Matte Finish" &&
    backgroundOutput.value === "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects3 *
        monochrome *
        finishMatte
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * monochrome * finishMatte).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  }

  /*********************************************************************/
  //*** This is the function to include the Background calculations ***//
  /*********************************************************************/
  else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "No Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = (prices[0] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (prices[1] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subject1 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * complexBG).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
    console.log(heightOutput.value);
    console.log(widthOutput.value);
    console.log(subjectOutput.value);
    console.log(colourOutput.value);
    console.log(finishOutput.value);
    console.log(calcArea);
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "No Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (prices[2] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (prices[3] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects2 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * complexBG).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "No Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (prices[4] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (prices[5] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (prices[6] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (prices[7] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (prices[8] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (prices[9] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (prices[10] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (prices[11] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (prices[12] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (prices[13] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (prices[14] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (prices[15] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (prices[16] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (prices[17] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (prices[18] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (prices[19] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (prices[20] * subjects3 * complexBG).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * complexBG).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "No Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = (
        prices[0] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (
        prices[1] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subject1 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "No Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects2 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "No Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects3 *
        monochrome *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * monochrome * complexBG).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Gloss Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = (
        prices[0] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (
        prices[1] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subject1 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Gloss Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects2 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Gloss Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects3 *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Gloss Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = (
        prices[0] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * monochrome * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (
        prices[1] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * monochrome * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * monochrome * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * monochrome * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * monochrome * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * monochrome * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * monochrome * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * monochrome * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * monochrome * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * monochrome * finishGloss * complexBG).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subject1 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Gloss Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects2 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Gloss Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects3 *
        monochrome *
        finishGloss *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * monochrome * finishGloss * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Matte Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = (
        prices[0] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (
        prices[1] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subject1 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Matte Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects2 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Full Colour" &&
    finishOutput.value === "Matte Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects3 *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "One Subject" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Matte Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value =
        prices[0] * subject1 * monochrome * finishMatte * complexBG;
      localStorage.setItem(
        "total",
        (prices[0] * subject1 * monochrome * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = (
        prices[1] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[1] * subject1 * monochrome * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subject1 * monochrome * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subject1 * monochrome * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subject1 * monochrome * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subject1 * monochrome * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subject1 * monochrome * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subject1 * monochrome * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subject1 * monochrome * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subject1 * monochrome * finishMatte * complexBG).toFixed(2)
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subject1 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subject1 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subject1 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subject1 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subject1 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subject1 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subject1 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subject1 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subject1 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subject1 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subject1 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subject1 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Two Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Matte Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 350) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 351 && calcArea < 500) {
      quoteTotal.value = "Too small for 2 subjects";
      localStorage.setItem("total", "Too small for 2 subjects");
    } else if (calcArea > 501 && calcArea < 750) {
      quoteTotal.value = (
        prices[2] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[2] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 751 && calcArea < 1050) {
      quoteTotal.value = (
        prices[3] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[3] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects2 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects2 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else if (
    widthOutput.value !== "" &&
    heightOutput.value !== "" &&
    subjectOutput.value === "Three Subjects" &&
    colourOutput.value === "Black and White" &&
    finishOutput.value === "Matte Finish" &&
    backgroundOutput.value !== "Minimal Background"
  ) {
    if (calcArea > 0 && calcArea < 1050) {
      quoteTotal.value = "Too small for 3 subjects";
      localStorage.setItem("total", "Too small for 3 subjects");
    } else if (calcArea > 1051 && calcArea < 1400) {
      quoteTotal.value = (
        prices[4] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[4] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 1401 && calcArea < 1800) {
      quoteTotal.value = (
        prices[5] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[5] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 1801 && calcArea < 2250) {
      quoteTotal.value = (
        prices[6] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[6] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 2251 && calcArea < 2750) {
      quoteTotal.value = (
        prices[7] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[7] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 2751 && calcArea < 3250) {
      quoteTotal.value = (
        prices[8] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[8] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 3251 && calcArea < 4150) {
      quoteTotal.value = (
        prices[9] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[9] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 4151 && calcArea < 4850) {
      quoteTotal.value = (
        prices[10] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[10] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 4851 && calcArea < 5650) {
      quoteTotal.value = (
        prices[11] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[11] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 5651 && calcArea < 7000) {
      quoteTotal.value = (
        prices[12] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[12] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 7001 && calcArea < 7550) {
      quoteTotal.value = (
        prices[13] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[13] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 7551 && calcArea < 9050) {
      quoteTotal.value = (
        prices[14] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[14] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 9051 && calcArea < 11000) {
      quoteTotal.value = (
        prices[15] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[15] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 11001 && calcArea < 15000) {
      quoteTotal.value = (
        prices[16] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[16] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 15001 && calcArea < 19800) {
      quoteTotal.value = (
        prices[17] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[17] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 19801 && calcArea < 27000) {
      quoteTotal.value = (
        prices[18] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[18] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 27001 && calcArea < 41200) {
      quoteTotal.value = (
        prices[19] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[19] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 41201 && calcArea < 50000) {
      quoteTotal.value = (
        prices[20] *
        subjects3 *
        monochrome *
        finishMatte *
        complexBG
      ).toFixed(2);
      localStorage.setItem(
        "total",
        (prices[20] * subjects3 * monochrome * finishMatte * complexBG).toFixed(
          2
        )
      );
    } else if (calcArea > 50001) {
      quoteTotal.value = "Please contact for price";
      localStorage.setItem("total", "Please contact for price");
    }
  } else {
    quoteTotal.value = "Please contact for quote";
  }
  console.log(heightOutput.value);
  console.log(widthOutput.value);
  console.log(subjectOutput.value);
  console.log(colourOutput.value);
  console.log(finishOutput.value);
  console.log(backgroundOutput.value);
  console.log(calcArea);

  formWidth.value = widthOutput.value;
  formHeight.value = heightOutput.value;
  formSubject.value = subjectOutput.value;
  formColour.value = colourOutput.value;
  formFinish.value = finishOutput.value;
  formBackground.value = backgroundOutput.value;
  formQuoteTotal.value = "£" + quoteTotal.value;

  //if you want to have a discount on all values:
  // quoteTotal.value = quoteTotal.value / 2;
  quoteTotal.textContent = `£ ${quoteTotal.value}`;
  quoteTotalLG.textContent = `£ ${quoteTotal.value}`;
}

totalPrice();
