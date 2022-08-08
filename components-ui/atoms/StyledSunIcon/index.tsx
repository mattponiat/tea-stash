//Chakra-ui
import { IconButton, useColorMode } from "@chakra-ui/react";
//Icons
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const StyledSunIcon = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      bg="secondaryGreen.500"
      color="white"
      fontSize="20px"
      _hover={{ backgroundColor: "secondaryGreen.400" }}
      _active={{ backgroundColor: "" }}
      aria-label={
        colorMode === "light" ? "Toggle dark mode" : "Toggle light mode"
      }
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
    />
  );
};

export default StyledSunIcon;
