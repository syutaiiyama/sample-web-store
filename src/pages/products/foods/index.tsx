import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ProductTitle } from "../../../components/Product/Title/ProductTitle";
import { ProductCard } from "../../../components/Product/Card/ProductCard";
import { Grid } from "@material-ui/core";
import { TProduct } from "../../../contexts/products/products.type";
import { useApp } from "../../../contexts/app/app.context";
import { MuiModal } from "../../../components/Modal/MuiModal";
import { ProductModal } from "../../../containers/Modal/ProductModal";
import style from "../products.module.css";
import { useProducts } from "../../../contexts/products/products.context";
import { apiClient } from "../../../infrastructure/apiClient/apiClient";

function FoodPage({ foods }) {
  const { containerSpacing } = useApp();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [clickedProduct, setClickedProduct] = useState<TProduct>();

  const handleCardClick = useCallback((product: TProduct) => {
    setClickedProduct(product);
    setIsModalOpen(true);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Image
        src={"/images/food.jpg"}
        width={700}
        height={475}
        layout={"responsive"}
      />
      <ProductTitle productCategory={"Food"} />
      <Grid
        container
        spacing={containerSpacing}
        className={style.productsWrapper}
      >
        {foods.map((food, index) => (
          <ProductCard
            product={food}
            handleClick={() => handleCardClick(food)}
            key={index}
          />
        ))}
      </Grid>
      <MuiModal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProductModal
          product={clickedProduct}
          closeModal={() => setIsModalOpen(false)}
        />
      </MuiModal>
    </div>
  );
}

export async function getStaticProps() {
  const fetchedProducts = await apiClient.get.products();
  const foods = fetchedProducts.filter(
    (product) => product.category === "food"
  );
  return {
    revalidate: 3600,
    props: {
      foods,
    },
  };
}

export default FoodPage;
