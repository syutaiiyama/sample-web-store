import React, { useCallback, useEffect, useMemo } from "react";
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
import { TOrder, TOrderedProducts } from "../../contexts/order/order.type";
import { convertDate } from "../../utils/converDate";
import * as uuid from "uuid";
import { isEmpty, isPostalCodeFilled, isTelFilled } from "../../utils/isEmpty";

const CheckoutPage: React.FC = () => {
  const router = useRouter();
  const { cartItems, cartPayment, removeFromCart } = useCart();
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

  const handleCheckoutButtonClick = useCallback(async () => {
    const today = new Date();
    const reshapedDate = convertDate(today);

    // orderedProductsはバックエンドで生成するので、本来この変数は要らない
    const orderedProducts: Array<TOrderedProducts> = cartItems.map((item) => {
      return {
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
      };
    });

    // orderはバックエンドで処理を行うので、本来この変数は要らない
    const order: TOrder = {
      orderNo: uuid.v4(),
      user: {
        isAuthenticated: isAuthenticated,
        profile: profile,
        address: address,
        card: card,
      },
      products: orderedProducts,
      date: reshapedDate,
      payment: cartPayment,
    };
    await handleCheckout(order);
  }, [cartItems, cartPayment, isAuthenticated, profile, address, card]);

  const isAddressFilled = useMemo(
    () =>
      !isPostalCodeFilled(address?.postalCode) &&
      !isEmpty(address?.prefecture) &&
      !isEmpty(address?.city) &&
      !isEmpty(address?.addressLine) &&
      !isTelFilled(address?.tel),
    [
      address?.postalCode,
      address?.prefecture,
      address?.city,
      address?.addressLine,
      address?.tel,
    ]
  );

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
              disabled={cartItems.length === 0 || !isAddressFilled}
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
