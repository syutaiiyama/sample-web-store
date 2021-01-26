import React, { useState } from "react";
import { TOrder } from "../../contexts/order/order.type";
import {
  Collapse,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import { OrderListTable } from "./OrderListTable";

type OrderListComponentProps = {
  order: TOrder;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activeWrapper: {
      margin: "10px 0",
      padding: "10px 0 0",
      border: "1px solid #2196f3",
      borderRadius: "4px",
      maxWidth: "100%",
    },
    inactiveWrapper: {
      margin: "10px 0",
      padding: "10px 0 0",
      border: "1px solid rgba(0, 0, 0, 0.23)",
      borderRadius: "4px",
      maxWidth: "100%",
    },
  })
);

export const OrderListComponent: React.FC<OrderListComponentProps> = ({
  order,
}) => {
  const styles = useStyles();
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false);

  return (
    <Grid
      container
      direction={"column"}
      spacing={2}
      onClick={() => {
        if (isOpenDetail) {
          setIsOpenDetail(false);
        } else {
          setIsOpenDetail(true);
        }
      }}
      className={isOpenDetail ? styles.activeWrapper : styles.inactiveWrapper}
    >
      <Grid container item>
        <Typography variant={"body1"}>注文番号: 4382143214</Typography>
      </Grid>
      <Grid
        container
        item
        spacing={1}
        direction={"column"}
        style={{ marginBottom: "10px" }}
      >
        <Grid container item>
          <Typography variant={"body2"}>注文日: {order.date}</Typography>
        </Grid>
        <Grid container item>
          <Typography variant={"body2"}>
            合計: {order.payment.total}円
          </Typography>
        </Grid>
      </Grid>
      <Grid container item direction={"column"}>
        <Collapse in={isOpenDetail}>
          <Grid
            container
            direction={"column"}
            spacing={4}
            style={{ borderTop: "1px solid rgb(241, 241, 241)" }}
          >
            <Grid container item direction={"column"}>
              <Typography variant={"body1"}>お届け先住所</Typography>
              <Typography variant={"body2"}>
                〒{order.user.address.postalCode}
              </Typography>
              <Typography variant={"body2"}>
                {order.user.address.prefecture}
              </Typography>
              <Typography variant={"body2"}>
                {order.user.address.city}
              </Typography>
              <Typography variant={"body2"}>
                {order.user.address.addressLine}
              </Typography>
              <Typography variant={"body2"}>
                {order.user.address.building}
              </Typography>
              <Typography variant={"body2"}>
                {order.user.address.tel}
              </Typography>
            </Grid>
            <Grid
              container
              item
              style={{ borderTop: "1px solid rgb(241, 241, 241)" }}
            >
              <Grid container item justify={"space-between"}>
                <Grid item>
                  <Typography variant={"body2"}>お支払方法</Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"body2"}>クレジットカード</Typography>
                </Grid>
              </Grid>
              <Grid container item justify={"space-between"}>
                <Grid item>
                  <Typography variant={"body2"}>小計</Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"body2"}>
                    {order.payment.subtotal}円
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item justify={"space-between"}>
                <Grid item>
                  <Typography variant={"body2"}>配送料</Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"body2"}>
                    {order.payment.shipping}円
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item justify={"space-between"}>
                <Grid item>
                  <Typography variant={"body2"}>消費税</Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"body2"}>
                    {order.payment.tax}円
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item justify={"space-between"}>
                <Grid item>
                  <Typography>合計</Typography>
                </Grid>
                <Grid item>
                  <Typography>{order.payment.total}円</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item>
              <OrderListTable order={order} />
            </Grid>
          </Grid>
        </Collapse>
      </Grid>
    </Grid>
  );
};
