"use client";
import "@fontsource/poppins";

import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },

  palette: {
    primary: {
      main: "#00499e", // 修改主色
    },
    secondary: {
      main: "#8fc229", // 修改次要色
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
  },
});

export default theme;
