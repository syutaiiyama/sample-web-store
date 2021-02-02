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
import { apiClient } from "../../../infrastructure/apiClient/apiClient";

function BookPage({ books }) {
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
        src={"/images/book.jpeg"}
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
}

export async function getStaticProps() {
  const fetchedProducts = await apiClient.get.products();
  const books = fetchedProducts.filter(
    (product) => product.category === "book"
  );
  return {
    revalidate: 3600,
    props: {
      books,
    },
  };
}

export default BookPage;
