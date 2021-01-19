import React, { useCallback, useEffect } from "react";
import { CartTable } from "../../components/Cart/CartTable";
import { useCart } from "../../contexts/cart/cart.context";
import { useApp } from "../../contexts/app/app.context";
import { CartList } from "../../components/Cart/CartList";
import { Button, Grid } from "@material-ui/core";
import { useUser } from "../../contexts/user/user.context";
import { PriceInfo } from "../../components/Checkout/PriceInfo";
import { AddressInfo } from "../../components/Checkout/AddressInfo";
import { PaymentInfo } from "../../components/Checkout/PaymentInfo";
import { RemarkField } from "../../components/Checkout/RemarkField";
import { useRouter } from "next/router";
import { useOrder } from "../../contexts/order/order.context";
import { TOrder } from "../../contexts/order/order.type";
import { convertDate } from "../../utils/converDate";

const CheckoutPage: React.FC = () => {
  const router = useRouter();
  const { cartItems, cartPayment, removeFromCart, clearCart } = useCart();
  const { handleCheckout } = useOrder();
  const { deviceType, containerSpacing } = useApp();
  const {
    isAuthenticated,
    address,
    openAddressModal,
    profile,
    card,
    openCardModal,
  } = useUser();

  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, []);

  const handleCheckoutButtonClick = useCallback(() => {
    const today = new Date();
    const reshapedDate = convertDate(today);
    const order: TOrder = {
      user: {
        isAuthenticated: isAuthenticated,
        profile: profile,
        address: address,
        card: card,
      },
      cart: {
        cartItems: cartItems,
        payment: cartPayment,
      },
      date: reshapedDate,
    };
    handleCheckout(order);
    clearCart();
    router.push("/order-received");
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {deviceType === "mobile" ? (
        <CartList cartItems={cartItems} removeFromCart={removeFromCart} />
      ) : (
        <CartTable cartItems={cartItems} removeFromCart={removeFromCart} />
      )}
      <Grid container spacing={containerSpacing}>
        <PriceInfo payment={cartPayment} />
        <AddressInfo address={address} openAddressModal={openAddressModal} />
        <PaymentInfo card={card} openCardModal={openCardModal} />
        <RemarkField />
        <Grid container justify={"center"} style={{ padding: "20px" }}>
          <Grid item>
            <Button
              color={"primary"}
              variant={"contained"}
              onClick={handleCheckoutButtonClick}
            >
              注文確定
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
