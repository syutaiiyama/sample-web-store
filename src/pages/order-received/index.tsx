import React, { useEffect } from "react";
import { useOrder } from "../../contexts/order/order.context";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import * as uuid from "uuid";
import { TCartItem } from "../../contexts/cart/cart.type";
import { useRouter } from "next/router";
import { useCart } from "../../contexts/cart/cart.context";
import { TOrderedProducts } from "../../contexts/order/order.type";

const OrderReceivedPage: React.FC = () => {
  const router = useRouter();
  const { orderList } = useOrder();
  const { clearCart } = useCart();
  const currentOrder = orderList[orderList.length - 1];
  let cartItemQuantity = 0;
  currentOrder.products.forEach((product: TOrderedProducts) => {
    cartItemQuantity += product.quantity;
  });
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Paper
        style={{ padding: "50px", maxWidth: "800px", margin: "50px auto 0" }}
      >
        <Grid container direction={"column"} spacing={8}>
          <Grid container justify={"flex-end"}>
            <Button variant={"outlined"} onClick={() => router.push("/")}>
              トップへ戻る
            </Button>
          </Grid>
          <Grid container item>
            <Typography variant={"h6"}>
              ありがとうございます。注文が確定しました。
            </Typography>
          </Grid>
          <Grid container item spacing={2}>
            <Grid container item md={3} sm={12} direction={"column"}>
              <Typography>注文番号</Typography>
              <Typography>{uuid.v4()}</Typography>
            </Grid>
            <Grid container item md={3} sm={12} direction={"column"}>
              <Typography>日付</Typography>
              <Typography>{currentOrder.date}</Typography>
            </Grid>
            <Grid container item md={3} sm={12} direction={"column"}>
              <Typography>お支払額</Typography>
              <Typography>{currentOrder.payment.total}円</Typography>
            </Grid>
            <Grid container item md={3} sm={12} direction={"column"}>
              <Typography>お支払方法</Typography>
              <Typography>クレジットカード</Typography>
            </Grid>
          </Grid>
          <Grid container item spacing={4}>
            <Grid container item>
              <Typography variant={"h6"}>注文詳細</Typography>
            </Grid>
            <Grid container item direction={"column"} spacing={2}>
              <Grid container item>
                <Typography>商品数{"　"}：</Typography>
                <Typography>{cartItemQuantity}</Typography>
              </Grid>
              <Grid container item>
                <Typography>注文日時：</Typography>
                <Typography>{currentOrder.date}</Typography>
              </Grid>
              <Grid container item>
                <Typography>お届け先：</Typography>
                <div>
                  <Typography>
                    〒{currentOrder.user.address.postalCode}
                  </Typography>
                  <Typography>
                    {currentOrder.user.address.prefecture}
                  </Typography>
                  <Typography>{currentOrder.user.address.city}</Typography>
                  <Typography>
                    {currentOrder.user.address.addressLine}
                  </Typography>
                  <Typography>{currentOrder.user.address.building}</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item spacing={4}>
            <Grid container item>
              <Typography variant={"h6"}>合計</Typography>
            </Grid>
            <Grid container item direction={"column"} spacing={2}>
              <Grid container item>
                <Typography>お支払方法：</Typography>
                <Typography>クレジットカード</Typography>
              </Grid>
              <Grid container item>
                <Typography>小計{"　"}：</Typography>
                <Typography>{currentOrder.payment.subtotal}円</Typography>
              </Grid>
              <Grid container item>
                <Typography>消費税：</Typography>
                <Typography>{currentOrder.payment.tax}円</Typography>
              </Grid>
              <Grid container item>
                <Typography>配送料：</Typography>
                <Typography>{currentOrder.payment.shipping}円</Typography>
              </Grid>
              <Grid container item>
                <Typography>合計{"　"}：</Typography>
                <Typography>{currentOrder.payment.total}円</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default OrderReceivedPage;
