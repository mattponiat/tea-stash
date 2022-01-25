import * as React from "react";
//Chakra-ui
import { Container } from "@chakra-ui/react";
import styled from "@emotion/styled";
//Components
import ButtonComp from "components-ui/atoms/ButtonComp";

const NavBar = () => {
  return (
    <Container
      as="nav"
      h="inherit"
      w="fit-content"
      //   border="1px solid black"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      gap="20"
    >
      <ButtonStyled>Teas</ButtonStyled>
      <ButtonStyled>Vendors</ButtonStyled>
      <ButtonStyled>About</ButtonStyled>
    </Container>
  );
};

const ButtonStyled = styled(ButtonComp)`
  background: none;
  font-size: 18px;

  :hover,
  :focus,
  :focus-visible {
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

export default NavBar;
