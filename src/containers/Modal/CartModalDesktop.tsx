import React from "react";
import { useCart } from "../../contexts/cart/cart.context";
import style from "./ProductModal.module.css";
import {
  Button,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Image from "next/image";
import DeleteIcon from "@material-ui/icons/Delete";
import { TCartItem } from "../../contexts/cart/cart.type";

export const CartModalDesktop: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <div className={style.cart_wrapper}>
      <TableContainer>
        <Table>
          <TableHead style={{ backgroundColor: "#FAFAFA" }}>
            <TableRow>
              <TableCell align={"center"} />
              <TableCell align={"left"}>商品名</TableCell>
              <TableCell align={"left"}>数量</TableCell>
              <TableCell align={"left"}>価格</TableCell>
              <TableCell align={"left"} />
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems?.map((item: TCartItem) => (
              <TableRow>
                <TableCell align={"center"}>
                  <Image src={item.product.imageSrc} width={100} height={150} />
                </TableCell>
                <TableCell>{item.product.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.quantity * item.product.price}円</TableCell>
                <TableCell>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
