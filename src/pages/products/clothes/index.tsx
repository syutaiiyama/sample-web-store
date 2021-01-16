import React from "react";
import Image from "next/image";
import { ProductTitle } from "../../../components/Product/Title/ProductTitle";
import { ProductCard } from "../../../components/Product/Card/ProductCard";
import { Grid } from "@material-ui/core";

const ClothePage: React.FC = () => {
  const clothesSample = {
    imageSrc: "/images/clothe_product.jpg",
    name: "貴族風 ヨーロッパ風 洋服 仮装 ドレス ステージ衣装 ",
    price: 699,
  };

  const clothes = [
    clothesSample,
    clothesSample,
    clothesSample,
    clothesSample,
    clothesSample,
    clothesSample,
    clothesSample,
    clothesSample,
  ];

  return (
    <div style={{ width: "100%" }}>
      <Image
        src={"/images/clothe.jpg"}
        width={700}
        height={475}
        layout={"responsive"}
      />
      <ProductTitle productCategory={"Clothe"} />
      <Grid container spacing={6} style={{ padding: "0 30px" }}>
        {clothes.map((clothe) => (
          <ProductCard
            imageSrc={clothe.imageSrc}
            price={clothe.price}
            name={clothe.name}
          />
        ))}
      </Grid>
    </div>
  );
};

export default ClothePage;
