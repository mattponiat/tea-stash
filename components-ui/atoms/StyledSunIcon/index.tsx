//Chakra-ui
import { IconButton } from "@chakra-ui/react";
//Icons
import { SunIcon } from "@chakra-ui/icons";

const StyledSunIcon = () => {
  return (
    <IconButton
      bg="secondaryGreen"
      color="white"
      fontSize="20px"
      _hover={{ background: "#5e8b5e" }}
      _active={{ background: "secondaryGreen" }}
      aria-label="Dark mode"
      icon={<SunIcon />}
    />
  );
};

export default StyledSunIcon;
