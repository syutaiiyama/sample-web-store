import React from "react";
import Image from "next/image";
import { ProductTitle } from "../../../components/Product/Title/ProductTitle";
import { ProductCard } from "../../../components/Product/Card/ProductCard";
import { Grid } from "@material-ui/core";

const BookPage: React.FC = () => {
  const bookSample = {
    imageSrc: "/images/book_product.jpg",
    name: "売れる商品はデザインで決まる",
    price: 1000,
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

  return (
    <div style={{ width: "100%" }}>
      <Image
        src={"/images/book2.jpg"}
        width={700}
        height={475}
        layout={"responsive"}
      />
      <ProductTitle productCategory={"Book"} />
      <Grid container spacing={6} style={{ padding: "0 30px" }}>
        {books.map((book) => (
          <ProductCard
            imageSrc={book.imageSrc}
            price={book.price}
            name={book.name}
          />
        ))}
      </Grid>
    </div>
  );
};

export default BookPage;
