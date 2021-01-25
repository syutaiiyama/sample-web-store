import React, { useCallback, useEffect, useState } from "react";
import { useApp } from "../../contexts/app/app.context";
import { useProducts } from "../../contexts/products/products.context";
import { TProduct } from "../../contexts/products/products.type";
import Image from "next/image";
import { ProductTitle } from "../../components/Product/Title/ProductTitle";
import { Grid } from "@material-ui/core";
import style from "./products.module.css";
import { ProductCard } from "../../components/Product/Card/ProductCard";
import { MuiModal } from "../../components/Modal/MuiModal";
import { ProductModal } from "../../containers/Modal/ProductModal";
import { useRouter } from "next/router";
import { NoResult } from "../../components/NoResult/NoResult";

const SearchedProductsPage: React.FC = () => {
  const { containerSpacing } = useApp();
  const router = useRouter();
  const { products, fetchProducts } = useProducts();
  const [searchedProducts, setSearchedProducts] = useState<Array<TProduct>>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [clickedProduct, setClickedProduct] = useState<TProduct>();

  const handleCardClick = useCallback((product: TProduct) => {
    setClickedProduct(product);
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (router.query.item) {
      const query = (router.query.item as string).toUpperCase();
      setSearchedProducts(
        products.filter((product) => {
          return (
            product.name.toUpperCase().includes(query) ||
            product.description.toUpperCase().includes(query)
          );
        })
      );
    }
  }, [products, router.query.item]);

  return (
    <div style={{ width: "100%" }}>
      {searchedProducts.length === 0 ? (
        <NoResult />
      ) : (
        <>
          <Grid
            container
            spacing={containerSpacing}
            className={style.productsWrapper}
          >
            {searchedProducts.map((book, index) => (
              <ProductCard
                product={book}
                handleClick={() => handleCardClick(book)}
                key={index}
              />
            ))}
          </Grid>
          <MuiModal
            isModalOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <ProductModal
              product={clickedProduct}
              closeModal={() => setIsModalOpen(false)}
            />
          </MuiModal>
        </>
      )}
    </div>
  );
};

export default SearchedProductsPage;
