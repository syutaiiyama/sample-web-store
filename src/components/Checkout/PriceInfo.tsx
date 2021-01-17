import React from "react";
import { TPayment } from "../../contexts/cart/cart.type";
import { Grid, Typography } from "@material-ui/core";

type PriceInfoProps = {
  payment: TPayment;
};

export const PriceInfo: React.FC<PriceInfoProps> = ({ payment }) => {
  return (
    <Grid item lg={6} md={6} container direction={"column"}>
      <Grid item>
        <Typography variant={"h6"} style={{ padding: "20px 10px" }}>
          お支払
        </Typography>
      </Grid>
      <Grid item>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "solid 1px rgb(194, 195, 204)",
            borderRadius: "4px",
            padding: "30px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>小計：</Typography>
            <Typography>{payment.subtotal}円</Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>送料：</Typography>
            <Typography>{payment.shipping}円</Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>消費税：</Typography>
            <Typography>{payment.tax}円</Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>合計</Typography>
            <Typography>{payment.total}円</Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
