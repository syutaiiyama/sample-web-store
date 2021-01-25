import React from "react";
import { Grid, Typography } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export const NoResult: React.FC = () => {
  return (
    <Grid
      container
      spacing={4}
      justify={"center"}
      alignItems={"center"}
      direction={"column"}
      style={{ height: "100vh" }}
    >
      <Grid item>
        <HelpOutlineIcon />
      </Grid>
      <Grid item>
        <Typography>検索結果なし...</Typography>
      </Grid>
    </Grid>
  );
};
