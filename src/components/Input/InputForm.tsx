import React, { ChangeEvent } from "react";
import { Grid, TextField, Typography } from "@material-ui/core";

type GridProps =
  | boolean
  | "auto"
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

type InputFormPropd = {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value?: string;
  xs?: GridProps;
  lg?: GridProps;
  md?: GridProps;
};

export const InputForm: React.FC<InputFormPropd> = ({
  label,
  onChange,
  value,
  xs,
  lg,
  md,
}) => {
  return (
    <Grid
      container
      justify={"space-between"}
      alignItems={"center"}
      item
      xs={xs ? xs : 12}
      lg={lg ? lg : false}
      md={md ? md : 6}
    >
      <Grid item xs={12} md={6}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          value={value}
          variant={"outlined"}
          size={"small"}
          onChange={onChange}
          style={{ width: "100%" }}
        />
      </Grid>
    </Grid>
  );
};
