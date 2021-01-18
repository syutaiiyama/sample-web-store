import { TCart } from "../cart/cart.type";
import { TUser } from "../user/user.type";

export type TOrder = {
  user: TUser;
  createdAt: string;
  cart: TCart;
};
