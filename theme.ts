import { extendTheme } from "@chakra-ui/react";

const Menu = {
  baseStyle: {
    list: { minWidth: "inherit" },
  },
};

const theme = extendTheme({
  fonts: {
    heading: "nunito",
    body: "nunito",
  },
  colors: {
    mainBeige: "#FFF7E7",
    secondaryGreen: {
      800: "#2c4324",
      700: "#345229",
      600: "#3e662f",
      500: "#497a36",
      400: "#619d4a",
      300: "#83ba6e",
      200: "#afd5a0",
      100: "#d3e8ca",
    },
    darkMode: {
      main: "#2d3748",
      hover: "#424b5a",
    },
  },
  components: {
    Menu,
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});

type Theme = typeof theme;

export type { Theme };
export { theme };
