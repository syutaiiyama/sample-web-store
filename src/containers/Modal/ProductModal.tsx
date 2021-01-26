import { TProduct } from "../../contexts/products/products.type";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import style from "./ProductModal.module.css";
import { Button, Grid, IconButton, Typography } from "@material-ui/core";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { useCart } from "../../contexts/cart/cart.context";
import { TCartItem } from "../../contexts/cart/cart.type";
import { useUser } from "../../contexts/user/user.context";
import { generateTestImageUrl } from "../../utils/generateTestImageUrl";

type ProductModalProps = {
  product: TProduct;
  closeModal: () => void;
};

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  closeModal,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart, fetchCart } = useCart();
  const { isAuthenticated, openAuthModal } = useUser();

  const handleAddQuantity = useCallback(() => setQuantity(quantity + 1), [
    quantity,
  ]);

  const handleRemoveQuantity = useCallback(() => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  }, [quantity]);

  const handleAddToCart = useCallback(async () => {
    if (!isAuthenticated) {
      closeModal();
      openAuthModal();
      return;
    }
    // const addCartItem: TCartItem = {
    //   product: product,
    //   quantity: quantity,
    // };
    await addToCart(product, quantity);
    await fetchCart();
    closeModal();
  }, [quantity, product]);

  const imageUrl = generateTestImageUrl(product);

  return (
    <div style={{ maxWidth: "90%", maxHeight: "90%", overflow: "scroll" }}>
      <div className={style.wrapper}>
        <Grid container spacing={4}>
          <Grid container justify={"flex-end"}>
            <Grid item>
              <IconButton onClick={closeModal}>
                <CloseOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid
            container
            item
            md={4}
            sm={12}
            justify={"center"}
            className={style.preview_wrapper}
          >
            <Grid item>
              <Image
                src={imageUrl}
                width={400}
                height={400}
                layout={"intrinsic"}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={4} direction={"column"} md={8} sm={12}>
            <Grid container item alignItems={"flex-start"} direction={"column"}>
              <Grid item>
                <Typography variant={"h6"}>{product.name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant={"body1"}>
                  {product.price.toString()}円
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant={"body2"}>{product.description}</Typography>
            </Grid>
            <Grid
              item
              container
              justify={"space-between"}
              alignItems={"center"}
            >
              <Grid item style={{ display: "flex", alignItems: "center" }}>
                <Grid item>
                  <IconButton color={"primary"} onClick={handleRemoveQuantity}>
                    <RemoveOutlinedIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant={"body1"}>{quantity}</Typography>
                </Grid>
                <Grid item>
                  <IconButton color={"primary"} onClick={handleAddQuantity}>
                    <AddOutlinedIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant={"body1"}>
                    {(quantity * product.price).toString()}円
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  color={"primary"}
                  variant={"contained"}
                  onClick={handleAddToCart}
                >
                  カートに追加
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
