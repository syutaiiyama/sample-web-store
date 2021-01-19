import React from "react";
import { TOrder } from "../../contexts/order/order.type";
import { Grid, Paper, Typography } from "@material-ui/core";
import { OrderListComponent } from "./OrderListComponent";

type OrderListProps = {
  orderList: Array<TOrder>;
};

export const OrderList: React.FC<OrderListProps> = ({ orderList }) => {
  return (
    <Paper
      style={{
        width: "800px",
        maxWidth: "100%",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <Grid container direction={"column"}>
        <Grid container>
          <Typography variant={"h6"}>注文履歴</Typography>
        </Grid>
        {orderList.map((order) => (
          <OrderListComponent order={order} />
        ))}
      </Grid>
    </Paper>
  );
};
