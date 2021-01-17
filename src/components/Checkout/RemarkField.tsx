import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";

export const RemarkField: React.FC = () => {
  return (
    <Grid item lg={6} md={6} container direction={"column"}>
      <Grid item>
        <Typography variant={"h6"} style={{ padding: "20px 10px" }}>
          備考
        </Typography>
      </Grid>
      <Grid item>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField multiline rows={4} variant={"outlined"} />
        </div>
      </Grid>
    </Grid>
  );
};
