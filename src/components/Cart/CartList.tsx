import { TCartItem } from "../../contexts/cart/cart.type";
import { IconButton, List, ListItem, Typography } from "@material-ui/core";
import Image from "next/image";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

type CartListProps = {
  cartItems: Array<TCartItem>;
  removeFromCart: (cartItem: TCartItem) => void;
};

export const CartList: React.FC<CartListProps> = ({
  cartItems,
  removeFromCart,
}) => {
  return (
    <List style={{ width: "100%" }}>
      {cartItems.map((item, index) => (
        <ListItem divider key={index}>
          <div style={{ padding: "0 10px" }}>
            <Image
              src={item.product.imageUrl}
              width={100}
              height={100}
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
              <IconButton onClick={() => removeFromCart(item)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
        </ListItem>
      ))}
    </List>
  );
};
