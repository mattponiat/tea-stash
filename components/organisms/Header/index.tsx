import * as React from "react";
//Chakra-ui
import { Flex, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
//Components
import Logo from "components-ui/atoms/Logo";
import NavBar from "components-ui/molecules/NavBar";

const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      h="fit-content"
      p="6"
      boxShadow="0px 0px 1px"
      alignItems="center"
      bg="mainBeige"
    >
      <Logo />
      <NavBar />
      <ButtonStyled
        bg="secondaryGreen"
        color="white"
        ml="2.25rem"
        minWidth="auto"
      >
        Dark mode
      </ButtonStyled>
    </Flex>
  );
};

const ButtonStyled = styled(Button)`
  :hover {
    background: #8ab18a;
  }
`;

export default Header;
