export type TProduct = {
  name: string;
  category?: TCategory;
  price: number;
  imageUrl: string;
  description: string;
};

export type TCategory = "book" | "food" | "clothe";
