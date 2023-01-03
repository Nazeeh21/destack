import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc

const themeConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}


const styles = {
  colors: {
    brand: {
      yellow: '#FBF4EE',
      highlight: '#FFD5B0',
    },
  },
  fonts: {
    regular: `'Nunito', sans-serif`,
  },
  themeConfig
};

export const theme = extendTheme(styles);
