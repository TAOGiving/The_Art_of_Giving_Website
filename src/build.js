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
    .replace(/{{DESCRIPTION}}/g, product.description);

  fs.writeFileSync(path.join(outputDir, `${product.slug}.html`), html);
});

console.log("✅ Product pages generated");
