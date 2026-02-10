// build.js
const fs = require("fs");
const path = require("path");
const products = require("./products");

const template = fs.readFileSync(
  path.join(__dirname, "product-template.html"),
  "utf8",
);

const outputDir = path.join(__dirname, "../dist/products");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

products.forEach((product) => {
  let html = template
    .replace(/{{TITLE}}/g, product.name)
    .replace(/{{NAME}}/g, product.name)
    .replace(/{{PRICE}}/g, product.price)
    .replace(/{{DESCRIPTION}}/g, product.description)
    .replace(/{{LONG_DESCRIPTION}}/g, product.longDescription)
    .replace(/{{IMAGE_URL}}/g, product.imageUrls[0]);

  const alternatives = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  let alternativesHtml = "";

  alternatives.forEach((alt) => {
    alternativesHtml += `
      <div
        class="alternative-card"
        onclick="window.location.href='/products/${alt.slug}.html'"
      >
        <img
          src="/images/${alt.image}"
          alt="${alt.name}"
          class="alternative-image"
        />
        <h3>${alt.name}</h3>
        <p class="alternative-description">${alt.description}</p>
      </div>`;
  });

  html = html.replace("{{ALTERNATIVE_PRODUCTS}}", alternativesHtml);

  fs.writeFileSync(path.join(outputDir, `${product.slug}.html`), html);
});

console.log("✅ Product pages generated");
