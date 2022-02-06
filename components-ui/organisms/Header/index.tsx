//Chakra-ui
import { Button, Grid } from "@chakra-ui/react";
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
      <Button
        fontSize="1.125rem"
        bg="secondaryGreen"
        color="white"
        minWidth="auto"
        ml="auto"
        _hover={{ background: "#8ab18a" }}
        _active={{ background: "secondaryGreen" }}
      >
        Dark mode
      </Button>
    </Grid>
  );
};

export default Header;
