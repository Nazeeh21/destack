import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc

const themeConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}


const styles = {
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  themeConfig
};

export const theme = extendTheme(styles);
