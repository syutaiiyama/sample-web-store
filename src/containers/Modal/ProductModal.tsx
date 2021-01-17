import { TProduct } from "../../contexts/products/products.type";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import style from "./ProductModal.module.css";
import { Button, Grid, IconButton, Typography } from "@material-ui/core";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

type ProductModalProps = {
  product: TProduct;
  closeModal: () => void;
};

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  closeModal,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddQuantity = useCallback(() => setQuantity(quantity + 1), [
    quantity,
  ]);

  const handleRemoveQuantity = useCallback(() => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  }, [quantity]);

  const handleAddToCart = useCallback(() => {
    //TODO: カートの更新
    closeModal();
  }, []);

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
            md={4}
            sm={12}
            justify={"center"}
            className={style.preview_wrapper}
          >
            <Grid item>
              <Image
                src={product.imageSrc}
                width={300}
                height={500}
                layout={"intrinsic"}
              />
            </Grid>
          </Grid>
          <Grid item md={8} sm={12}>
            <div className={style.detail_wrapper}>
              <Typography variant={"h6"}>{product.name}</Typography>
              <Typography variant={"body1"}>
                {product.price.toString()}円
              </Typography>
              <div style={{ height: "30px" }} />
              <Typography variant={"body2"}>{product.description}</Typography>
              <div className={style.button_group}>
                <div className={style.quantity_price_wrapper}>
                  <IconButton color={"primary"} onClick={handleRemoveQuantity}>
                    <RemoveOutlinedIcon />
                  </IconButton>
                  <Typography variant={"body1"}>{quantity}</Typography>
                  <IconButton color={"primary"} onClick={handleAddQuantity}>
                    <AddOutlinedIcon />
                  </IconButton>
                  <Typography variant={"body1"}>
                    {(quantity * product.price).toString()}円
                  </Typography>
                </div>
                <Button
                  color={"primary"}
                  variant={"contained"}
                  onClick={handleAddToCart}
                >
                  カートに追加
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
