import React from "react";
import style from "./ProductModal.module.css";
import { useCart } from "../../contexts/cart/cart.context";
import {
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import DeleteIcon from "@material-ui/icons/Delete";

export const CartModalMobile: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <div className={style.cart_wrapper}>
      <List>
        {cartItems.map((item) => (
          <ListItem divider>
            <div style={{ padding: "0 10px" }}>
              <Image
                src={item.product.imageSrc}
                width={100}
                height={150}
                layout={"fixed"}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant={"caption"}>{item.product.name}</Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex" }}>
                  <Typography variant={"caption"}>
                    数量：{item.quantity}
                  </Typography>
                  <div style={{ width: "20px" }} />
                  <Typography variant={"caption"}>
                    {item.quantity * item.product.price}円
                  </Typography>
                </div>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          </ListItem>
        ))}
      </List>
      <Grid container justify={"center"} style={{ margin: "30px 0 0" }}>
        <Grid item>
          <Button color={"primary"} variant={"contained"}>
            注文する
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
