import { TProduct } from "../products/products.type";

export type TCart = {
  payment: TPayment;
  cartItems: Array<TCartItem>;
};

export type TCartItem = {
  id: string;
  product: TProduct;
  quantity;
};

export type TPayment = {
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
};
