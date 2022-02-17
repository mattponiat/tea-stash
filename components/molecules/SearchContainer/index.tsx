//Chakra-ui
import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
//Components
import SearchLabel from "components-ui/atoms/SearchLabel";
//Context
import { useSearchTeasContext } from "context/SearchTeas";

const SearchContainer = () => {
  const { inputHandler } = useSearchTeasContext();

  return (
    <Flex w="17rem" mx="auto" h="3rem" alignItems="center">
      <SearchLabel>Search</SearchLabel>
      <InputGroup h="80%">
        <Input
          onChange={inputHandler}
          type="search"
          placeholder="e.g. Sencha"
          bg="white"
          w="12.07125rem"
          h="auto"
          ml="12px"
          borderRadius="8"
          boxShadow="0px 0px 1px rgba(0, 0, 0, 0.3)"
          focusBorderColor="secondaryGreen"
          fontWeight="bold"
        />
        <InputRightElement pointerEvents="none">
          <SearchIcon boxSize="1.2rem" />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default SearchContainer;
