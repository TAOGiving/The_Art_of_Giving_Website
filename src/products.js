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
    "RosaTheLabrador4inchx6inch(4R)Print",
    "Rosa The Labrador 4 inch x 6 inch (4R) Print",
    "Rosa_Lab_4X6-PRINT",
    14.99,
    "A 4 inch by 6 inch Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.<BR> Frame NOT included.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/4R_Rosa_Print.jpg",
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
    ],
    "https://square.link/u/DMuQ7K3Q",
  ),
  new Product(
    "RosaTheLabrador5inchx7inchPrint",
    "Rosa The Labrador 5 inch x 7 inch Print",
    "Rosa_Lab_5X7-PRINT",
    17.99,
    "A 5 inch by 7 inch Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.<BR> Frame NOT included.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/5x7_Rosa_Print.jpg",
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
    ],
    "https://square.link/u/4yzuxH2u",
    "Labrador",
  ),
  new Product(
    "RosaTheLabrador10inchx8inch(A4)Print",
    "Rosa The Labrador 10 inch x 8 inch (A4) Print",
    "Rosa_Lab_0A4-PRINT",
    34.99,
    "A 10 inch by 8 inch (A4) Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.<BR> Frame NOT included.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/A4_Rosa_Print.jpg",
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
    ],
    "https://square.link/u/0zeABJtV",
    "Labrador",
  ),
  new Product(
    "RosaTheLabradorA3",
    "Rosa The Labrador A3",
    "Rosa_Lab_0A3-PRINT",
    46.99,
    "An A3 Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colors. Perfect for framing and displaying in your home or office.<BR> Frame NOT included.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/A3_Rosa_Print.jpg",
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
    ],
    "https://square.link/u/nIYnDih5",
    "Labrador",
  ),
  new Product(
    "RosaTheLabradorA2",
    "Rosa The Labrador A2",
    "Rosa_Lab_0A2-PRINT",
    54.99,
    "An A2 Giclee Print of Rosa The Labrador, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.<BR> Frame NOT included.",
    "This is a long Description",
    [
      "/images/Rosa_Labrador/A2_Rosa_Print.jpg",
      "/images/Rosa_Labrador/Full_Painting.jpg",
      "/images/Rosa_Labrador/Close_Up_Belly.jpg",
      "/images/Rosa_Labrador/Close_Up_Chest.jpg",
      "/images/Rosa_Labrador/Close_Up_Face.jpg",
    ],
    "https://square.link/u/NjOMbrIa",
    "Labrador",
  ),
  new Product(
    "BillyTheCavachonPikapoo4inchx6inch(4R)Print",
    "Billy The Cavachon Pikapoo 4 inch x 6 inch (4R) Print",
    "Billy_Cava_4X6-PRINT",
    14.99,
    "A 4 inch by 6 inch Giclee Print of Billy The Cavachon Pikapoo, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.<BR> Frame NOT included.",
    "This is a long Description",
    [
      "/images/Billy_Cavachon_Pikapoo/4R_Billy_Print.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Painting_Reveal.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Close_Up_Face.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Close_Up_Left_Paw.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Close_Up_Mouth.jpg",
    ],
    "https://square.link/u/EIQwhJh1",
    "Cavachon Pikapoo",
  ),
  new Product(
    "BillyTheCavachonPikapoo5inchx7inchPrint",
    "Billy The Cavachon Pikapoo 5 inch x 7 inch Print",
    "Billy_Cava_5X7-PRINT",
    17.99,
    "A 5 inch by 7 inch Giclee Print of Billy The Cavachon Pikapoo, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.<BR> Frame NOT included.",
    "This is a long Description",
    [
      "/images/Billy_Cavachon_Pikapoo/5x7_Billy_Print.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Painting_Reveal.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Close_Up_Face.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Close_Up_Left_Paw.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Close_Up_Mouth.jpg",
    ],
    "https://square.link/u/EIQwhJh1",
    "Cavachon Pikapoo",
  ),
  new Product(
    "BillyTheCavachonPikapoo10inchx8inch(A4)Print",
    "Billy The Cavachon Pikapoo 10 inch x 8 inch (A4) Print",
    "Billy_Cava_0A4-PRINT",
    34.99,
    "A 10 inch by 8 inch (A4) Giclee Print of Billy The Cavachon Pikapoo, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.<BR> Frame NOT included.",
    "This is a long Description",
    [
      "/images/Billy_Cavachon_Pikapoo/A4_Billy_Print.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Painting_Reveal.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Close_Up_Face.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Close_Up_Left_Paw.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Close_Up_Mouth.jpg",
    ],
    "https://square.link/u/EIQwhJh1",
    "Cavachon Pikapoo",
  ),
  new Product(
    "BillyTheCavachonPikapooA3",
    "Billy The Cavachon Pikapoo A3",
    "Billy_Cava_0A3-PRINT",
    46.99,
    "An A3 Giclee Print of Billy The Cavachon Pikapoo, printed on high-quality paper with vibrant colors. Perfect for framing and displaying in your home or office.<BR> Frame NOT included.",
    "This is a long Description",
    [
      "/images/Billy_Cavachon_Pikapoo/A3_Billy_Print.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Painting_Reveal.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Close_Up_Face.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Close_Up_Left_Paw.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Close_Up_Mouth.jpg",
    ],
    "https://square.link/u/EIQwhJh1",
    "Cavachon Pikapoo",
  ),
  new Product(
    "BillyTheCavachonPikapooA2",
    "Billy The Cavachon Pikapoo A2",
    "Billy_Cava_0A2-PRINT",
    54.99,
    "An A2 Giclee Print of Billy The Cavachon Pikapoo, printed on high-quality paper with vibrant colours. Perfect for framing and displaying in your home or office.<BR> Frame NOT included.",
    "This is a long Description",
    [
      "/images/Billy_Cavachon_Pikapoo/A2_Billy_Print.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Painting_Reveal.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Close_Up_Face.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Close_Up_Left_Paw.jpg",
      "/images/Billy_Cavachon_Pikapoo/Billy_Close_Up_Mouth.jpg",
    ],
    "https://square.link/u/EIQwhJh1",
    "Cavachon Pikapoo",
  ),
];

module.exports = products;
