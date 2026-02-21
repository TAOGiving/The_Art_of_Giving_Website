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
    .replace(/{{IMAGE_URL}}/g, product.imageUrls[0])
    .replace(/{{PRODUCT_CODE}}/g, product.ProductCode)
    .replace(/{{SLUG}}/g, product.slug)
    .replace(/{{IMAGE_URL_2}}/g, product.imageUrls[1])
    .replace(/{{IMAGE_URL_3}}/g, product.imageUrls[2])
    .replace(/{{IMAGE_URL_4}}/g, product.imageUrls[3])
    .replace(/{{IMAGE_URL_5}}/g, product.imageUrls[4])
    .replace(/{{PRODUCT_URL}}/g, product.productURL);

  // First: find same-category products
  let alternatives = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  );

  // If fewer than 4 found, fill with others
  if (alternatives.length < 4) {
    const others = products.filter(
      (p) => p.category !== product.category && p.slug !== product.slug,
    );

    alternatives = alternatives.concat(others);
  }

  // Limit to 4
  alternatives = alternatives.slice(0, 4);

  let alternativesHtml = "";

  alternatives.forEach((alt) => {
    alternativesHtml += `
      <div
        class="alternative-card"
        onclick="goToProduct('${alt.slug}')"
      >
        <img
          src="/images/${alt.imageUrls[0].split("/").pop()}"
          alt="${alt.name}"
          class="alternative-image"
        />
        <p>${alt.name}</p>

      </div>`;
    // console.log(alt);
  });

  html = html.replace("{{ALTERNATIVE_PRODUCTS}}", alternativesHtml);

  fs.writeFileSync(path.join(outputDir, `${product.slug}.html`), html);
});

console.log("✅ Product pages generated");
