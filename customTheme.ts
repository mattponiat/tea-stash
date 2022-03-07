import { extendTheme } from "@chakra-ui/react";

const Menu = {
  baseStyle: {
    list: { minWidth: "inherit" },
  },
};

export const customTheme = extendTheme({
  fonts: {
    heading: "nunito",
    body: "nunito",
  },
  colors: {
    mainBeige: "#FFF7E7",
    secondaryGreen: "#497a36",
  },
  components: {
    Menu,
  },
});
