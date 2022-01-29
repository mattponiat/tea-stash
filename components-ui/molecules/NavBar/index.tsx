import * as React from "react";
//Chakra-ui
import { Container } from "@chakra-ui/react";
//Components
import { StyledLink } from "components-ui/atoms/StyledLink";

const NavBar: React.FC = () => {
  return (
    <Container
      as="nav"
      h="inherit"
      minWidth="13rem"
      p="1"
      display="flex"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <StyledLink href="/">Teas</StyledLink>
      <StyledLink href="/vendors">Vendors</StyledLink>
      <StyledLink href="/about">About</StyledLink>
    </Container>
  );
};
export default NavBar;
