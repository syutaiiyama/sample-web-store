import React, { useEffect } from "react";
import { CartTable } from "../../containers/Cart/CartTable";
import { useCart } from "../../contexts/cart/cart.context";
import { useApp } from "../../contexts/app/app.context";
import { CartList } from "../../containers/Cart/CartList";
import { Button, Grid } from "@material-ui/core";
import { useUser } from "../../contexts/user/user.context";
import { PriceInfo } from "../../components/Checkout/PriceInfo";
import { AddressInfo } from "../../components/Checkout/AddressInfo";
import { PaymentInfo } from "../../components/Checkout/PaymentInfo";
import { RemarkField } from "../../components/Checkout/RemarkField";
import { useRouter } from "next/router";

const CheckoutPage: React.FC = () => {
  const router = useRouter();
  const { cartItems, cartPayment } = useCart();
  const { deviceType, containerSpacing } = useApp();
  const {
    isAuthenticated,
    address,
    openAddressModal,
    card,
    openCardModal,
  } = useUser();

  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {deviceType === "mobile" ? (
        <CartList cartItems={cartItems} />
      ) : (
        <CartTable cartItems={cartItems} />
      )}
      <Grid container spacing={containerSpacing}>
        <PriceInfo payment={cartPayment} />
        <AddressInfo address={address} openAddressModal={openAddressModal} />
        <PaymentInfo card={card} openCardModal={openCardModal} />
        <RemarkField />
        <Grid container justify={"center"} style={{ padding: "20px" }}>
          <Grid item>
            <Button color={"primary"} variant={"contained"}>
              注文確定
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
