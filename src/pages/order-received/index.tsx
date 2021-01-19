import React from "react";
import { useOrder } from "../../contexts/order/order.context";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import * as uuid from "uuid";

const OrderReceivedPage: React.FC = () => {
  const { orderList } = useOrder();
  const currentOrder = orderList[orderList.length - 1];

  return (
    <div style={{ width: "100%" }}>
      <Paper
        style={{ padding: "50px", maxWidth: "800px", margin: "50px auto 0" }}
      >
        <Grid container direction={"column"} spacing={8}>
          <Grid container justify={"flex-end"}>
            <Button variant={"outlined"}>戻る</Button>
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
              <Typography>2021年1月19日</Typography>
            </Grid>
            <Grid container item md={3} sm={12} direction={"column"}>
              <Typography>お支払額</Typography>
              <Typography>1000円</Typography>
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
                <Typography>商品数：</Typography>
                <Typography>2</Typography>
              </Grid>
              <Grid container item>
                <Typography>注文日時：</Typography>
                <Typography>2021年1月18日</Typography>
              </Grid>
              <Grid container item>
                <Typography>お届け先：</Typography>
                <Typography>住所</Typography>
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
                <Typography>小計：</Typography>
                <Typography>1000円</Typography>
              </Grid>
              <Grid container item>
                <Typography>消費税：</Typography>
                <Typography>100円</Typography>
              </Grid>
              <Grid container item>
                <Typography>配送料：</Typography>
                <Typography>0円</Typography>
              </Grid>
              <Grid container item>
                <Typography>合計：</Typography>
                <Typography>1100円</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default OrderReceivedPage;
