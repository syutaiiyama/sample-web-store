import React from "react";
import { Typography } from "@material-ui/core";
import { Line } from "../../Line/Line";

type Props = {
  productCategory: string;
};

export const ProductTitle: React.FC<Props> = ({ productCategory }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "30px 0" }}>
      <Typography variant={"h4"}>{productCategory}</Typography>
      <Line />
    </div>
  );
};
