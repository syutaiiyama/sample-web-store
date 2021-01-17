import React, { useCallback } from "react";
import style from "./ProductModal.module.css";
import { useCart } from "../../contexts/cart/cart.context";
import { Button, Grid, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import { CartList } from "../Cart/CartList";

export const CartModalMobile: React.FC = () => {
  const { cartItems, cartPayment, closeCartModal } = useCart();
  const router = useRouter();

  const handleCheckoutButton = useCallback(() => {
    router.push("/checkout");
    closeCartModal();
  }, []);

  return (
    <div className={style.cart_wrapper}>
      <CartList cartItems={cartItems} />
      <Grid
        container
        alignItems={"center"}
        justify={"flex-end"}
        style={{ padding: "10px" }}
      >
        <Grid item>
          <Typography variant={"body2"}>
            小計：{cartPayment.subtotal}円
          </Typography>
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
