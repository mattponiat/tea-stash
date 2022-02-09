//Chakra-ui
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
//Components
import SearchLabel from "components-ui/atoms/SearchLabel";
//Types
import { TeasProps } from "types";
//Context
import { useSearchTeasContext } from "context/SearchTeas";

const TypeContainer = ({ teas }: TeasProps) => {
  const { currentType, setCurrentType } = useSearchTeasContext();

  const uniqueArray = teas.filter(
    (value, index, array) =>
      array.findIndex((t) => t.typeOfTea.name === value.typeOfTea.name) ===
      index
  );

  return (
    <Flex w="17rem" mx="auto" h="inherit" alignItems="center">
      <SearchLabel>Type</SearchLabel>
      <Menu matchWidth>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon boxSize="1.45rem" />}
          bg="white"
          w="100%"
          h="80%"
          borderRadius="8"
          borderWidth="1px"
          boxShadow="0px 0px 1px rgba(0, 0, 0, 0.3)"
        >
          {currentType}
        </MenuButton>
        <MenuList defaultValue="Any">
          <MenuItem value="Any" onClick={() => setCurrentType("Any")}>
            Any
          </MenuItem>
          {uniqueArray.map((elem, index) => (
            <MenuItem
              key={index + 1}
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
