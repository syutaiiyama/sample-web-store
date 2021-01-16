import React from "react";
import Image from "next/image";
import { Grid, Paper, Typography } from "@material-ui/core";

type ProductCardProps = {
  imageSrc: string;
  price: number;
  name: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  price,
  name,
}) => {
  return (
    <Grid item xl={3} lg={3} md={4} sm={6}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <Image src={imageSrc} width={260} height={333} layout={"intrinsic"} />
        </div>
        <Typography variant={"body1"}>{name}</Typography>
        <Typography>{price.toString()}円</Typography>
      </Paper>
    </Grid>
  );
};
