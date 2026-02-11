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
    `Beautiful A4 Giclee Print of Maximus`,
    "P1004A24",
    54.95,
    "A4 Giclee Print of Maximus, printed on high-quality paper with vibrant colors. Perfect for framing and displaying in your home or office.",
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
    `Beautiful A3 Giclee Print of Maximus`,
    "P1004A23",
    64.95,
    "A3 Giclee Print of Maximus, printed on high-quality paper with vibrant colors. Perfect for framing and displaying in your home or office.",
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
    `Beautiful A2 Giclee Print of Maximus`,
    "P1004A22",
    74.95,
    "A2 Giclee Print of Maximus, printed on high-quality paper with vibrant colors. Perfect for framing and displaying in your home or office.",
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
    `Beautiful A1 Giclee Print of Maximus`,
    "P1004A21",
    84.95,
    "A1 Giclee Print of Maximus, printed on high-quality paper with vibrant colors. Perfect for framing and displaying in your home or office.",
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
