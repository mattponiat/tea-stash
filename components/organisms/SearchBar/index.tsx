//Chakra-ui
import { Grid } from "@chakra-ui/react";
//Components
import SearchContainer from "components/molecules/SearchContainer";
import TypeContainer from "components/molecules/TypeContainer";
import CountryContainer from "components/molecules/CountryContainer";
//Types
import { TeasProps } from "types";

const SearchBar = ({ teas }: TeasProps) => {
  const teasNames = teas.map((elem) => elem.name);

  return (
    <Grid
      bg="mainBeige"
      minW="20rem"
      w="70.5%"
      h="3rem"
      my="12"
      boxShadow="0px 0px 5px rgba(0, 0, 0, 0.4)"
      borderRadius="8px"
      templateColumns="repeat(3, 1fr)"
      justifyContent="center"
      alignContent="center"
    >
      <SearchContainer teasNames={teasNames} />
      <TypeContainer teas={teas} />
      <CountryContainer teas={teas} />
    </Grid>
  );
};

export default SearchBar;
