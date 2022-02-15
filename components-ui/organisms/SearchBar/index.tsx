//Chakra-ui
import { Grid } from "@chakra-ui/react";
//Components
import SearchContainer from "components/molecules/SearchContainer";
import TypeContainer from "components/molecules/TypeContainer";
import CountryContainer from "components/molecules/CountryContainer";
//Types
import { TeasProps } from "types";

const SearchBar = ({ teas }: TeasProps) => {
  return (
    <Grid
      bg="mainBeige"
      minW="350px"
      w="70.5%"
      minH="3rem"
      h="auto"
      my="12"
      boxShadow="0px 0px 4px rgba(0, 0, 0, 0.3)"
      borderRadius="8px"
      templateColumns="repeat(auto-fit, minmax(330px, 1fr))"
      justifyContent="center"
      alignContent="center"
    >
      <SearchContainer />
      <TypeContainer teas={teas} />
      <CountryContainer teas={teas} />
    </Grid>
  );
};

export default SearchBar;
