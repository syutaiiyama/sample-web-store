import React, { useEffect } from "react";
import { SideMenu } from "../../../containers/SideMenu/SideMenu";
import { Grid } from "@material-ui/core";
import { OrderList } from "../../../components/OrderList/OrderList";
import { useOrder } from "../../../contexts/order/order.context";
import { useRouter } from "next/router";
import { useUser } from "../../../contexts/user/user.context";

const OrderListPage: React.FC = () => {
  // const { orderList } = useOrder();
  const { orders, fetchOrders } = useOrder();
  const { isAuthenticated } = useUser();
  const router = useRouter();

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, []);

  return (
    <div style={{ padding: "40px 0 0", margin: "0 auto", maxWidth: "100%" }}>
      <Grid container justify={"center"} spacing={2}>
        <SideMenu />
        <Grid item md={8} sm={12} xs={12}>
          <OrderList orderList={orders.reverse()} />
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderListPage;
