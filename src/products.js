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
  }
}

const products = [
  new Product(
    "MaximusGicleePrints",
    `Beautiful<strong> A4 </strong>Giclee Print of Maximus`,
    "P1004A24",
    54.95,
    "This is the short description",
    `This is the long description`,
    [
      "/images/Black and White.jpg",
      "/images/Black and White.jpg",
      "/images/Black and White.jpg",
      "/images/Black and White.jpg",
      "/images/Black and White.jpg",
    ],
  ),
];

module.exports = products;
