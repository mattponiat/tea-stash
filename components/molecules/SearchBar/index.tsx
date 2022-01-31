import * as React from "react";
//Chakra-ui
import { Box } from "@chakra-ui/react";
//Types
import { TeasProps } from "types";
//Components

const SearchBar = ({ teas }: TeasProps) => {
  return <Box w="75%" p="8" border="1px black solid" my="8"></Box>;
};

export default SearchBar;
