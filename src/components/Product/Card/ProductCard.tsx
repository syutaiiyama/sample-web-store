import React from "react";
import Image from "next/image";
import { Grid, Paper, Typography } from "@material-ui/core";
import { TProduct } from "../../../contexts/products/products.type";
import { useApp } from "../../../contexts/app/app.context";

type ProductCardProps = {
  product: TProduct;
  handleClick: () => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  handleClick,
}) => {
  const { deviceType } = useApp();

  return (
    <Grid item xl={3} lg={3} md={4} sm={6} xs={6}>
      <Paper elevation={3} style={{ padding: "20px" }} onClick={handleClick}>
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <Image
            src={product.imageSrc}
            width={260}
            height={333}
            layout={"intrinsic"}
          />
        </div>
        <Typography variant={deviceType === "desktop" ? "body1" : "body2"}>
          {product.name}
        </Typography>
        <Typography variant={deviceType === "desktop" ? "h6" : "body1"}>
          {product.price.toString()}円
        </Typography>
      </Paper>
    </Grid>
  );
};