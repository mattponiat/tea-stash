//Chakra-ui
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
//Components
import SearchLabel from "components-ui/atoms/SearchLabel";
//Context
import { useSearchTeasContext } from "context/SearchTeas";

const SearchContainer = () => {
  const { inputHandler } = useSearchTeasContext();

  const bg = useColorModeValue("white", "gray.800");

  return (
    <Flex
      mx="auto"
      minH="3rem"
      maxW="fit-content"
      alignItems="center"
      justifyContent="space-betweeen"
    >
      <SearchLabel>Search</SearchLabel>
      <InputGroup>
        <Input
          onChange={inputHandler}
          type="search"
          placeholder="e.g. Sencha"
          bg={bg}
          maxW="206px"
          borderRadius="8"
          boxShadow="0px 0px 1px rgba(0, 0, 0, 0.3)"
          focusBorderColor="secondaryGreen.500"
          fontWeight="bold"
        />
        <InputRightElement pointerEvents="none" zIndex={0}>
          <SearchIcon boxSize="1.2rem" />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default SearchContainer;
