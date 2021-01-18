import React, { useCallback, useState } from "react";
import Image from "next/image";
import { ProductTitle } from "../../../components/Product/Title/ProductTitle";
import { ProductCard } from "../../../components/Product/Card/ProductCard";
import { Grid } from "@material-ui/core";
import { TProduct } from "../../../contexts/products/products.type";
import { MuiModal } from "../../../components/Modal/MuiModal";
import { ProductModal } from "../../../containers/Modal/ProductModal";
import style from "../products.module.css";
import { useApp } from "../../../contexts/app/app.context";

const BookPage: React.FC = () => {
  const { containerSpacing } = useApp();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [clickedProduct, setClickedProduct] = useState<TProduct>();

  const bookSample: TProduct = {
    imageSrc: "/images/book_product2.png",
    name: "売れる商品はデザインで決まる",
    price: 1000,
    description:
      "本書では、ビジネスでのサービスデザインの基本と実践方法をわかりやすく解説します。具体的な成功事例を交え、サービスデザインを使った問題の特定からその解決方法までを示していきます。" +
      "消費者・企業・行政に向けたサービスに携わる人のための、顧客体験の作り方がわかる実践的ガイドブックです。" +
      "本書では、ビジネスでのサービスデザインの基本と実践方法をわかりやすく解説します。具体的な成功事例を交え、サービスデザインを使った問題の特定からその解決方法までを示していきます。" +
      "消費者・企業・行政に向けたサービスに携わる人のための、顧客体験の作り方がわかる実践的ガイドブックです。",
  };

  const books = [
    bookSample,
    bookSample,
    bookSample,
    bookSample,
    bookSample,
    bookSample,
    bookSample,
    bookSample,
  ];

  const handleCardClick = useCallback((product: TProduct) => {
    setClickedProduct(product);
    setIsModalOpen(true);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Image
        src={"/images/book2.jpg"}
        width={700}
        height={475}
        layout={"responsive"}
      />
      <ProductTitle productCategory={"Book"} />
      <Grid
        container
        spacing={containerSpacing}
        className={style.productsWrapper}
      >
        {books.map((book, index) => (
          <ProductCard
            product={book}
            handleClick={() => handleCardClick(book)}
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

export default BookPage;
