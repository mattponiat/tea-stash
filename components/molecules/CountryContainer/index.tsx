import * as React from "react";
//Chakra-ui
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
//Components
import SearchLabel from "components-ui/atoms/SearchLabel";
//Types
import { TeasProps } from "types";
//Context
import { useSearchTeasContext } from "context/SearchTeas";

const CountryContainer = ({ teas }: TeasProps) => {
  const { currentCountry, setCurrentCountry } = useSearchTeasContext();

  const { colorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");

  const uniqueArray = teas.filter(
    (value, index, array) =>
      array.findIndex((t) => t.country.name === value.country.name) === index
  );

  return (
    <Flex
      maxW="fit-content"
      mx="auto"
      minH="3rem"
      alignItems="center"
      justifyContent="space-between"
    >
      <SearchLabel>Country</SearchLabel>
      <Menu matchWidth autoSelect={false}>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon boxSize="1.45rem" />}
          bg={bg}
          minW="206px"
          borderRadius="8"
          borderWidth="1px"
          boxShadow="0px 0px 1px rgba(0, 0, 0, 0.3)"
          _hover={
            colorMode === "light"
              ? { backgroundColor: "gray.200" }
              : { backgroundColor: "darkMode.hover" }
          }
          _active={
            colorMode === "light"
              ? { backgroundColor: "gray.300" }
              : { backgroundColor: "darkMode.hover" }
          }
        >
          {currentCountry}
        </MenuButton>
        <MenuList defaultValue="Any">
          <MenuItem value="Any" onClick={() => setCurrentCountry("Any")}>
            Any
          </MenuItem>
          {uniqueArray
            .sort((a, b) => {
              if (a.country.name < b.country.name) {
                return -1;
              }
              if (a.country.name > b.country.name) {
                return 1;
              }
              return 0;
            })
            .map((elem) => (
              <MenuItem
                key={elem.country.name}
                value={elem.country.name}
                onClick={() => setCurrentCountry(elem.country.name)}
              >
                {elem.country.name}
              </MenuItem>
            ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default CountryContainer;
