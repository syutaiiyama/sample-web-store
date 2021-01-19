import React from "react";
import { SideMenu } from "../../../containers/SideMenu/SideMenu";
import { Grid, Paper } from "@material-ui/core";
import { OrderList } from "../../../components/OrderList/OrderList";
import { useOrder } from "../../../contexts/order/order.context";

const OrderListPage: React.FC = () => {
  const { orderList } = useOrder();

  return (
    <div style={{ padding: "40px 0 0", margin: "0 auto", maxWidth: "100%" }}>
      <Grid container justify={"center"} spacing={2}>
        <SideMenu />
        <Grid item md={8} sm={12} xs={12}>
          <OrderList orderList={orderList} />
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderListPage;
