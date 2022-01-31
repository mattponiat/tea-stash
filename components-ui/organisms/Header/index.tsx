import * as React from "react";
//Chakra-ui
import { Button, Grid } from "@chakra-ui/react";
import styled from "@emotion/styled";
//Components
import Logo from "components-ui/atoms/Logo";
import NavBar from "components-ui/molecules/NavBar";

const Header = () => {
  return (
    <Grid
      as="header"
      w="100%"
      h="fit-content"
      p="6"
      boxShadow="0px 0px 1px"
      bg="mainBeige"
      templateColumns="150px minmax(max-content, 100%) 150px"
      placeItems="center"
    >
      <Logo />
      <NavBar />
      <ButtonStyled bg="secondaryGreen" color="white" minWidth="auto" ml="auto">
        Dark mode
      </ButtonStyled>
    </Grid>
  );
};

const ButtonStyled = styled(Button)`
  font-size: 1.125rem;
  :hover {
    background: #8ab18a;
  }
`;

export default Header;
