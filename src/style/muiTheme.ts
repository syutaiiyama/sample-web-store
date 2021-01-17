import { createMuiTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#333333",
      secondary: "#333333",
    },
    primary: {
      main: "#297437",
    },
    secondary: orange,
  },
});
