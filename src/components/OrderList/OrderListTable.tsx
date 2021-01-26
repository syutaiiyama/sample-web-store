import React from "react";
import { TOrder, TOrderedProducts } from "../../contexts/order/order.type";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { TCartItem } from "../../contexts/cart/cart.type";

type OrderListTableProps = {
  order: TOrder;
};

export const OrderListTable: React.FC<OrderListTableProps> = ({ order }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead style={{ backgroundColor: "#FAFAFA" }}>
          <TableRow>
            <TableCell align={"center"}>商品名</TableCell>
            <TableCell align={"center"}>単価</TableCell>
            <TableCell align={"center"} style={{ whiteSpace: "nowrap" }}>
              数量
            </TableCell>
            <TableCell align={"center"}>価格</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.products?.map((product: TOrderedProducts, index) => (
            <TableRow key={index}>
              <TableCell align={"center"}>{product.name}</TableCell>
              <TableCell align={"center"}>{product.price}円</TableCell>
              <TableCell align={"center"}>{product.quantity}</TableCell>
              <TableCell align={"center"}>
                {product.quantity * product.price}円
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
