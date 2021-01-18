import React, { useCallback } from "react";
import { useCart } from "../../contexts/cart/cart.context";
import style from "./ProductModal.module.css";
import { Button, Grid, Typography } from "@material-ui/core";
import { CartTable } from "../Cart/CartTable";
import { useRouter } from "next/router";
import { useUser } from "../../contexts/user/user.context";

export const CartModalDesktop: React.FC = () => {
  const { closeCartModal, cartItems, cartPayment, removeFromCart } = useCart();
  const { isAuthenticated, openAuthModal } = useUser();
  const router = useRouter();

  const handleCheckoutButton = useCallback(() => {
    if (!isAuthenticated) {
      closeCartModal();
      openAuthModal();
      return;
    }
    router.push("/checkout");
    closeCartModal();
  }, [isAuthenticated]);

  return (
    <div className={style.cart_wrapper}>
      <CartTable cartItems={cartItems} removeFromCart={removeFromCart} />
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
