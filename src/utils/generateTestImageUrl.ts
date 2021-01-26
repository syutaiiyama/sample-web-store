import { TProduct } from "../contexts/products/products.type";

export const generateTestImageUrl = (product: TProduct) => {
  let imageUrl;

  // バックエンドがGCSに繋がっていないのでimageUrlはハードコーディング
  if (product.category === "book") {
    imageUrl = "/images/book_product2.png";
  } else if (product.category === "clothe") {
    imageUrl = "/images/clothe_product2.png";
  } else {
    imageUrl = "/images/food_product2.png";
  }

  return imageUrl;
};
