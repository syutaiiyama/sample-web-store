import { TProduct } from "./products.type";
import React, { createContext, useContext } from "react";
import { productOperations } from "./products.operations";

type ContextProps = {
  fetchProducts: () => void;
  products: Array<TProduct>;
  books: Array<TProduct>;
  clothes: Array<TProduct>;
  foods: Array<TProduct>;
};

const ProductContext = createContext({} as ContextProps);

export const ProductProvider = ({ children }) => {
  const operations = productOperations();
  return (
    <ProductContext.Provider value={operations}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
