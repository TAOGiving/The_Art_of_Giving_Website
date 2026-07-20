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
    "RosaTheLabrador4inchx6inch(4R)GicleePrint",
    "Rosa The Labrador 4 inch x 6 inch (4R) Giclee Print",
    "Rosa_Lab_4X6-PRINT",
    14.99,
    "A 4 inch by 6 inch Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
      "/images/Rosa_Labrador/Rosa_the_Labrador_QR_Code.png",
    ],
    "https://square.link/u/DMuQ7K3Q",
  ),
  new Product(
    "RosaTheLabrador5inchx7inchGicleePrint",
    "Rosa The Labrador 5 inch x 7 inch Giclee Print",
    "Rosa_Lab_5X7-PRINT",
    17.99,
    "A 5 inch by 7 inch Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
      "/images/Rosa_Labrador/Rosa_the_Labrador_QR_Code.png",
    ],
    "https://square.link/u/4yzuxH2u",
  ),
  new Product(
    "RosaTheLabrador10inchx8inch(A4)GicleePrint",
    "Rosa The Labrador 10 inch x 8 inch (A4) Giclee Print",
    "Rosa_Lab_0A4-PRINT",
    34.99,
    "A 10 inch by 8 inch (A4) Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
      "/images/Rosa_Labrador/Rosa_the_Labrador_QR_Code.png",
    ],
    "https://square.link/u/0zeABJtV",
  ),
  new Product(
    "RosaTheLabradorA3GicleePrint",
    "Rosa The Labrador A3 Giclee Print",
    "Rosa_Lab_0A3-PRINT",
    46.99,
    "An A3 Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colors. Perfect for framing and displaying in your home or office.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
      "/images/Rosa_Labrador/Rosa_the_Labrador_QR_Code.png",
    ],
    "https://square.link/u/nIYnDih5",
  ),
  new Product(
    "RosaTheLabradorA2GicleePrint",
    "Rosa The Labrador A2 Giclee Print",
    "Rosa_Lab_0A2-PRINT",
    54.99,
    "An A2 Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
      "/images/Rosa_Labrador/Rosa_the_Labrador_QR_Code.png",
    ],
    "https://square.link/u/NjOMbrIa",
  ),
];

module.exports = products;
