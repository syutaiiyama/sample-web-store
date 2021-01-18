import React, { useCallback } from "react";
import style from "./ProductModal.module.css";
import { useCart } from "../../contexts/cart/cart.context";
import { Button, Grid, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import { CartList } from "../../components/Cart/CartList";
import { useUser } from "../../contexts/user/user.context";

export const CartModalMobile: React.FC = () => {
  const { cartItems, cartPayment, closeCartModal, removeFromCart } = useCart();
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
      <CartList cartItems={cartItems} removeFromCart={removeFromCart} />
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
