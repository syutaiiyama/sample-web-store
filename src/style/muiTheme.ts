import { createMuiTheme } from "@material-ui/core";
import { orange, blue } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#333333",
      secondary: "#333333",
    },
    primary: blue,
    secondary: orange,
  },
});
