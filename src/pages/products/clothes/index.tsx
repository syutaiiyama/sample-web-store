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

const ClothePage: React.FC = () => {
  const { containerSpacing } = useApp();
  const { clothes, fetchProducts } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [clickedProduct, setClickedProduct] = useState<TProduct>();

  const handleCardClick = useCallback((product: TProduct) => {
    setClickedProduct(product);
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Image
        src={"/images/clothe.jpg"}
        width={700}
        height={475}
        layout={"responsive"}
      />
      <ProductTitle productCategory={"Clothes"} />
      <Grid
        container
        spacing={containerSpacing}
        className={style.productsWrapper}
      >
        {clothes.map((clothe, index) => (
          <ProductCard
            product={clothe}
            handleClick={() => handleCardClick(clothe)}
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
};

export default ClothePage;
