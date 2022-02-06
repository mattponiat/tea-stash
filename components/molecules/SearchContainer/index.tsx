//Chakra-ui
import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
//Components
import SearchLabel from "components-ui/atoms/SearchLabel";

const SearchContainer = ({ teasNames }: { teasNames: string[] }) => {
  return (
    <Flex w="19rem" mx="auto" h="inherit" alignItems="center">
      <SearchLabel>Search</SearchLabel>
      <InputGroup h="80%">
        <Input
          type="search"
          bg="white"
          w="100%"
          h="auto"
          ml="8"
          borderRadius="8"
          boxShadow="0px 0px 1px rgba(0, 0, 0, 0.3)"
          focusBorderColor="secondaryGreen"
        />
        <InputRightElement pointerEvents="none">
          <SearchIcon boxSize="1.2rem" />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default SearchContainer;
