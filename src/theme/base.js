import { theme } from "@chakra-ui/core";
import customIcons from "./custom-icons";

const base = {
  ...theme,
  icons: {
    ...theme.icons,
    ...customIcons,
  },
  fonts: {
    ...theme.fonts,
    heading:
      "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
    body:
      "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      // 900: "#171C1F",
    },
    brand: {
      0: "#F0F5FF",
      100: "#F0F5FF",
      200: "#D8E7FF",
      300: "#C1D9FF",
      400: "#93BCFF",
      500: "#649FFF",
      600: "#5A8FE6",
      700: "#3C5F99",
      800: "#2D4873",
      900: "#1E304D",
    },
  },
};

export default base;
