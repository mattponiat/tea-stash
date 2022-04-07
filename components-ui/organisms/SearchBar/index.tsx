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
      templateColumns="repeat(auto-fit, minmax(min(100%, 290px), 1fr))"
      autoRows="1fr"
      placeItems="center"
      maxW="100%"
      p="1"
      mb="12"
      bg={bg}
      borderRadius="8px"
      boxShadow="mainShadow"
    >
      <SearchContainer />
      <TypeContainer teas={teas} />
      <CountryContainer teas={teas} />
    </Grid>
  );
};

export default SearchBar;
