//Chakra-ui
import { Grid, useColorModeValue } from "@chakra-ui/react";
//Components
import SearchContainer from "components/molecules/SearchContainer";
import TypeContainer from "components/molecules/TypeContainer";
import CountryContainer from "components/molecules/CountryContainer";
//Types
import { TeasProps } from "types";

const SearchBar = ({ teas }: TeasProps) => {
  const bg = useColorModeValue("mainBeige", "darkMode.main");

  return (
    <Grid
      bg={bg}
      maxW="100%"
      minW="320px"
      mb="12"
      p="1"
      boxShadow="mainShadow"
      borderRadius="8px"
      templateColumns="repeat(auto-fit, minmax(290px, 1fr))"
      autoRows="1fr"
      placeItems="center"
    >
      <SearchContainer />
      <TypeContainer teas={teas} />
      <CountryContainer teas={teas} />
    </Grid>
  );
};

export default SearchBar;
