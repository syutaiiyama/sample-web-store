export type TPostCartItemRequest = {
  productId: string;
  quantity: number;
};

export type TPatchCartItemRequest = {
  quantity: number;
};

export type TPostOrderResponse = {
  orderNo: string;
};
