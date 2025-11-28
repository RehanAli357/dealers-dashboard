import { createTheme, responsiveFontSizes } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    primaryGreen: Palette["primary"];
    primaryRed: Palette["primary"];
  }
  interface PaletteOptions {
    primaryGreen?: PaletteOptions["primary"];
    primaryRed?: PaletteOptions["primary"];
  }
}

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1025,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#1C3B6F",
    },
    secondary: {
      main: "#D9D9D9",
    },
    text: {
      primary: "#121212",
      secondary: "#FFFFFF",
    },
    primaryGreen: {
      main: "#28A745",
    },
    primaryRed: {
      main: "#DC3545",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
    h1: {
      fontSize: "2.75rem", // 44 px
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.25rem", // 36px
    },
    h3: {
      fontSize: "2rem", // 32px
    },
    h4: {
      fontSize: "1.75rem", // 28px
    },
    h5: {
      fontSize: "1.5rem", // 24px
    },
    h6: {
      fontSize: "1.125rem", // 18px
    },
    body1: {
      fontSize: "1rem", //16px
    },
    body2: {
      fontSize: "0.875rem", //14px
    },
    subtitle1: {
      fontSize: "0.8125rem", //13px
    },
    subtitle2: {
      fontSize: "0.75", //12px
    },
  },
});

const theme = responsiveFontSizes(baseTheme);
export default theme;

export type Theme = typeof theme;
