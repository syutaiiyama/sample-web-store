import { TCartItem } from "../../contexts/cart/cart.type";
import {
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
import React from "react";
import { generateTestImageUrl } from "../../utils/generateTestImageUrl";

type CartTableProps = {
  cartItems: Array<TCartItem>;
  removeFromCart: (cartItem: TCartItem) => void;
};

export const CartTable: React.FC<CartTableProps> = ({
  cartItems,
  removeFromCart,
}) => {
  return (
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
          {cartItems?.map((item: TCartItem, index) => (
            <TableRow key={index}>
              <TableCell align={"center"}>
                <Image
                  src={generateTestImageUrl(item.product)}
                  width={200}
                  height={200}
                />
              </TableCell>
              <TableCell>{item.product.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.quantity * item.product.price}円</TableCell>
              <TableCell>
                <IconButton onClick={() => removeFromCart(item)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
