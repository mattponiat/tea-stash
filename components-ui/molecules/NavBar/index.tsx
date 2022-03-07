//Chakra-ui
import { Grid } from "@chakra-ui/react";
//Components
import StyledLink from "components-ui/atoms/StyledLink";

const NavBar = () => {
  return (
    <Grid
      as="nav"
      maxW="350px"
      w="100%"
      templateColumns="repeat(3, max-content)"
      justifyContent="space-between"
    >
      <StyledLink href="/">Teas</StyledLink>
      <StyledLink href="/vendors">Vendors</StyledLink>
      <StyledLink href="/about">About</StyledLink>
    </Grid>
  );
};
export default NavBar;
