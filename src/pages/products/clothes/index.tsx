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

const ClothePage: React.FC = () => {
  const { containerSpacing } = useApp();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [clickedProduct, setClickedProduct] = useState<TProduct>();

  const clothesSample: TProduct = {
    imageUrl: "/images/clothe_product2.png",
    name: "貴族風 ヨーロッパ風 洋服 仮装 ドレス ステージ衣装 ",
    price: 699,
    description:
      "ポリエステル100％素材で生地・縫製もしっかり！ 美しいラインできれいなシルエットを見せてくれます！ パーティ、お祭り、出演はもちろん普段着や、土日祝日、イベント、結婚式、コンサートではひときわ輝く素敵なドレスです。",
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

  const handleCardClick = useCallback((product: TProduct) => {
    setClickedProduct(product);
    setIsModalOpen(true);
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
