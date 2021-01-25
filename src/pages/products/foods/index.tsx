import React, { useCallback, useState } from "react";
import Image from "next/image";
import { ProductTitle } from "../../../components/Product/Title/ProductTitle";
import { ProductCard } from "../../../components/Product/Card/ProductCard";
import { Grid } from "@material-ui/core";
import { TProduct } from "../../../interfaces/products.type";
import { useApp } from "../../../contexts/app/app.context";
import { MuiModal } from "../../../components/Modal/MuiModal";
import { ProductModal } from "../../../containers/Modal/ProductModal";
import style from "../products.module.css";

const FoodPage: React.FC = () => {
  const { containerSpacing } = useApp();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [clickedProduct, setClickedProduct] = useState<TProduct>();

  const foodSample: TProduct = {
    imageUrl: "/images/food_product2.png",
    name: "国華園 食品 １５品目の国産野菜セット 15種1箱 常温 野菜",
    price: 2680,
    description:
      "たくさんの野菜が自宅に届く！\n" +
      "野菜をたくさん買うのは重くて大変ですが、ネットなら自宅に届くので便利！使い勝手の良い野菜が10品目必ず入るため当たり外れがなく安心♪",
  };

  const foods = [
    foodSample,
    foodSample,
    foodSample,
    foodSample,
    foodSample,
    foodSample,
    foodSample,
    foodSample,
  ];

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
};

export default FoodPage;
