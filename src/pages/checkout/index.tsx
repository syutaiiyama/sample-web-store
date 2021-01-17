import React from "react";
import { CartTable } from "../../containers/Cart/CartTable";
import { useCart } from "../../contexts/cart/cart.context";
import { useApp } from "../../contexts/app/app.context";
import { CartList } from "../../containers/Cart/CartList";
import { Button, Card, Grid, Typography } from "@material-ui/core";
import { useUser } from "../../contexts/user/user.context";

const CheckoutPage: React.FC = () => {
  const { cartItems, cartPayment } = useCart();
  const { deviceType, containerSpacing } = useApp();
  const { address, card, openAddressModal } = useUser();

  return (
    <div style={{ width: "100%" }}>
      {deviceType === "mobile" ? (
        <CartList cartItems={cartItems} />
      ) : (
        <CartTable cartItems={cartItems} />
      )}
      <Grid container spacing={containerSpacing}>
        <Grid item lg={6} container direction={"column"}>
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
                borderRadius: "10px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>小計：</Typography>
                <Typography>{cartPayment.subtotal}円</Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>送料：</Typography>
                <Typography>{cartPayment.shipping}円</Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>消費税：</Typography>
                <Typography>{cartPayment.tax}円</Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>合計</Typography>
                <Typography>{cartPayment.total}円</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid item lg={6} container direction={"column"}>
          <Grid item>
            <Typography variant={"h6"} style={{ padding: "20px 10px" }}>
              お届け先情報
            </Typography>
          </Grid>
          <Grid item>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "solid 1px rgb(194, 195, 204)",
                borderRadius: "10px",
                padding: "30px",
              }}
            >
              <Typography>〒{address.postalCode}</Typography>
              <Typography>{address.prefecture}</Typography>
              <Typography>{address.city}</Typography>
              <Typography>{address.addressLine}</Typography>
              <Typography>{address.building}</Typography>
              <Typography>{address.tel}</Typography>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px 0 0",
                }}
              >
                <Button
                  color={"primary"}
                  variant={"contained"}
                  onClick={openAddressModal}
                >
                  編集
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid item lg={6} container direction={"column"}>
          <Grid item>
            <Typography variant={"h6"} style={{ padding: "20px 10px" }}>
              お支払い方法
            </Typography>
          </Grid>
          <Grid item>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                border: "solid 1px rgb(194, 195, 204)",
                borderRadius: "10px",
                padding: "30px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>小計：</Typography>
                <Typography>{cartPayment.subtotal}円</Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>送料：</Typography>
                <Typography>{cartPayment.shipping}円</Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>消費税：</Typography>
                <Typography>{cartPayment.tax}円</Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>合計</Typography>
                <Typography>{cartPayment.total}円</Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
