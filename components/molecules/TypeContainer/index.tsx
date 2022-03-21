//Chakra-ui
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
//Components
import SearchLabel from "components-ui/atoms/SearchLabel";
//Types
import { TeasProps } from "types";
//Context
import { useSearchTeasContext } from "context/SearchTeas";

const TypeContainer = ({ teas }: TeasProps) => {
  const { currentType, setCurrentType } = useSearchTeasContext();

  const { colorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.800");

  const uniqueArray = teas.filter(
    (value, index, array) =>
      array.findIndex((t) => t.typeOfTea.name === value.typeOfTea.name) ===
      index
  );

  return (
    <Flex
      mx="auto"
      maxW="fit-content"
      minH="3rem"
      alignItems="center"
      justifyContent="space-between"
    >
      <SearchLabel>Type</SearchLabel>
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
              ? { background: "gray.200" }
              : { background: "darkMode.hover" }
          }
          _active={
            colorMode === "light"
              ? { background: "gray.300" }
              : { background: "darkMode.hover" }
          }
        >
          {currentType}
        </MenuButton>
        <MenuList defaultValue="Any">
          <MenuItem value="Any" onClick={() => setCurrentType("Any")}>
            Any
          </MenuItem>
          {uniqueArray.map((elem) => (
            <MenuItem
              key={elem.typeOfTea.name}
              value={elem.typeOfTea.name}
              onClick={() => setCurrentType(elem.typeOfTea.name)}
            >
              {elem.typeOfTea.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default TypeContainer;
