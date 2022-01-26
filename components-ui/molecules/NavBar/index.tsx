import * as React from "react";
import NextLink from "next/link";
//Chakra-ui
import { Container } from "@chakra-ui/react";
//Components
import ButtonStyled from "components-ui/atoms/ButtonStyled";

const NavBar = () => {
  return (
    <Container
      as="nav"
      h="inherit"
      w="100%"
      p="0"
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <ButtonStyled>
        <NextLink href="/">Teas</NextLink>
      </ButtonStyled>
      <ButtonStyled>
        <NextLink href="./vendors" passHref>
          Vendors
        </NextLink>
      </ButtonStyled>
      <ButtonStyled>
        <NextLink href="./about" passHref>
          About
        </NextLink>
      </ButtonStyled>
    </Container>
  );
};

export default NavBar;
