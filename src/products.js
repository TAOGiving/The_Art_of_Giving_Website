class Product {
  constructor(
    slug,
    name,
    productCode,
    price,
    description,
    longDescription,
    imageUrls,
  ) {
    this.slug = slug;
    this.name = name;
    this.ProductCode = productCode;
    this.price = price;
    this.description = description;
    this.longDescription = longDescription;
    this.imageUrls = imageUrls; //Array of image URLS
    // this.baseImage = "Images/Heart logo.png";
    // this.charLimits = charLimits;
  }
}

const products = [
  new Product(
    "MaximusGicleePrints",
    `Beautiful<strong> A4 </strong>Giclee Print of Maximus<span class="d-none">Search Option</span>`,
    "P1004A24",
    54.95,
    "This is the short description",
    `This is the long description<BR><BR><div id="personalisation-inputs" class="row align-items-center justfy-content-between mt-4"><div class="row align-items-center mb-2">`,
    [
      "images/Black and White.jpg",
      "images/Black and White.jpg",
      "images/Black and White.jpg",
      "images/Black and White.jpg",
      "images/Black and White.jpg",
      "images/Black and White.jpg",
    ],
  ),
];

module.exports = products;
