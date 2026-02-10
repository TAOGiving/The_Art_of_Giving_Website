class Product {
  constructor(
    slug,
    name,
    productCode,
    price,
    description,
    longDescription,
    imageUrls,
    // altProducts,
  ) {
    this.slug = slug;
    this.name = name;
    this.ProductCode = productCode;
    this.price = price;
    this.description = description;
    this.longDescription = longDescription;
    this.imageUrls = imageUrls; //Array of image URLS
    // this.altProducts = altProducts; //Array of alternative products
  }
}

const products = [
  new Product(
    "MaximusA4GicleePrints",
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
  new Product(
    "MaximusA3GicleePrints",
    `Beautiful<strong> A3 </strong>Giclee Print of Maximus`,
    "P1004A23",
    64.95,
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
  new Product(
    "MaximusA2GicleePrints",
    `Beautiful<strong> A2 </strong>Giclee Print of Maximus`,
    "P1004A22",
    74.95,
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
  new Product(
    "MaximusA1GicleePrints",
    `Beautiful<strong> A1 </strong>Giclee Print of Maximus`,
    "P1004A21",
    84.95,
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
  new Product(
    "MaximusA4GicleePrints",
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
