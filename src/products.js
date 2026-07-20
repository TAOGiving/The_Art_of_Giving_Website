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
    productURL,
    category,
  ) {
    this.slug = slug;
    this.name = name;
    this.ProductCode = productCode;
    this.price = price;
    this.description = description;
    this.longDescription = longDescription;
    this.imageUrls = imageUrls; //Array of image URLS
    // this.altProducts = altProducts; //Array of alternative products
    this.productURL = productURL;
    this.category = category;
  }
}

const products = [
  new Product(
    "RosaTheLabrador10inchx8inch(A4)Print",
    "Rosa The Labrador 10 inch x 8 inch (A4) Print",
    "Rosa_Lab_0A4-PRINT",
    34.99,
    "A 10 inch by 8 inch (A4) Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
      "/images/Rosa_Labrador/Rosa_the_Labrador_QR_Code.jpg",
    ],
    "https://square.link/u/0zeABJtV",
  ),
  new Product(
    "RosaTheLabradorA3",
    "Rosa The Labrador A3",
    "Rosa_Lab_0A3-PRINT",
    46.99,
    "An A3 Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colors. Perfect for framing and displaying in your home or office.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
      "/images/Rosa_Labrador/Rosa_the_Labrador_QR_Code.jpg",
    ],
    "https://square.link/u/nIYnDih5",
  ),
  new Product(
    "RosaTheLabradorA2",
    "Rosa The Labrador A2",
    "Rosa_Lab_0A2-PRINT",
    54.99,
    "An A2 Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
      "/images/Rosa_Labrador/Rosa_the_Labrador_QR_Code.jpg",
    ],
    "https://square.link/u/NjOMbrIa",
  ),
];

module.exports = products;
