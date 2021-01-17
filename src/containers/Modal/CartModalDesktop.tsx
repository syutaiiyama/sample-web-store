import React, { useCallback } from "react";
import { useCart } from "../../contexts/cart/cart.context";
import style from "./ProductModal.module.css";
import { Button, Grid, Typography } from "@material-ui/core";
import { CartTable } from "../Cart/CartTable";
import { useRouter } from "next/router";

export const CartModalDesktop: React.FC = () => {
  const { closeCartModal, cartItems, cartPayment } = useCart();
  const router = useRouter();

  const handleCheckoutButton = useCallback(() => {
    router.push("/checkout");
    closeCartModal();
  }, []);

  return (
    <div className={style.cart_wrapper}>
      <CartTable cartItems={cartItems} />
      <Grid container alignItems={"center"} style={{ padding: "20px" }}>
        <Grid item>
          <Typography>小計：{cartPayment.subtotal}円</Typography>
        </Grid>
      </Grid>
      <Grid container justify={"center"} style={{ margin: "30px 0 0" }}>
        <Grid item>
          <Button
            color={"primary"}
            variant={"contained"}
            onClick={handleCheckoutButton}
          >
            注文する
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
