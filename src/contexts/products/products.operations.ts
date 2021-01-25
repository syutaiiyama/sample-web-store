import { useState } from "react";
import { TProduct } from "./products.type";
import { apiClient } from "../../infrastructure/apiClient/apiClient";

export const productOperations = () => {
  const [products, setProducts] = useState<Array<TProduct>>([]);
  const [books, setBooks] = useState<Array<TProduct>>([]);
  const [clothes, setClothes] = useState<Array<TProduct>>([]);
  const [foods, setFoods] = useState<Array<TProduct>>([]);

  const fetchProducts = async () => {
    const productsData = await apiClient.get.products();
    const bookData = productsData.filter(
      (product) => product.category === "book"
    );
    const clotheData = productsData.filter(
      (product) => product.category === "clothe"
    );
    const foodData = productsData.filter(
      (product) => product.category === "food"
    );
    setProducts(productsData);
    setBooks(bookData);
    setClothes(clotheData);
    setFoods(foodData);
  };

  return {
    fetchProducts,
    products,
    books,
    clothes,
    foods,
  };
};
