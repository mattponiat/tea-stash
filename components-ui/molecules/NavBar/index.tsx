import * as React from "react";
//Chakra-ui
import { Container, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
//Components

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
      <ButtonStyled>Teas</ButtonStyled>
      <ButtonStyled>Vendors</ButtonStyled>
      <ButtonStyled>About</ButtonStyled>
    </Container>
  );
};

const ButtonStyled = styled(Button)`
  background: none;
  font-size: 18px;
  padding: 0;
  margin-inline: 0.5rem;

  :focus {
    /* box-shadow: none; */
  }

  :hover {
    background: inherit;
    color: #749b74;
  }
`;

export default NavBar;
