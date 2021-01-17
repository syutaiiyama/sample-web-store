import { TCartItem } from "../../contexts/cart/cart.type";
import { IconButton, List, ListItem, Typography } from "@material-ui/core";
import Image from "next/image";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

type CartListProps = {
  cartItems: Array<TCartItem>;
};

export const CartList: React.FC<CartListProps> = ({ cartItems }) => {
  return (
    <List style={{ width: "100%" }}>
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
  );
};
