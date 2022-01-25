import * as React from "react";
//Chakra-ui
import { Flex } from "@chakra-ui/react";
//Components
import Logo from "components-ui/atoms/Logo";
import NavBar from "components/molecules/NavBar";
import ButtonComp from "components-ui/atoms/ButtonComp";

const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      h="fit-content"
      p="6"
      //   border="1px solid black"
      boxShadow="0px 0px 1px"
      alignItems="center"
      backgroundColor="mainBeige"
    >
      <Logo />
      <NavBar />
      <ButtonComp backgroundColor="secondaryGreen" color="white">
        Dark mode toggle
      </ButtonComp>
    </Flex>
  );
};

export default Header;
