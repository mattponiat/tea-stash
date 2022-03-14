//Chakra-ui
import { IconButton } from "@chakra-ui/react";
//Icons
import { SunIcon } from "@chakra-ui/icons";

const StyledSunIcon = () => {
  return (
    <IconButton
      bg="secondaryGreen.500"
      color="white"
      fontSize="20px"
      _hover={{ background: "secondaryGreen.400" }}
      _active={{ background: "secondaryGreen.500" }}
      aria-label="Dark mode"
      icon={<SunIcon />}
    />
  );
};

export default StyledSunIcon;
