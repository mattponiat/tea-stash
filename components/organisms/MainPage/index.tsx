import * as React from "react";
//Chakra-ui
import {
  Button,
  Flex,
  Grid,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
//Components
import SearchBar from "components-ui/organisms/SearchBar";
import TeaCard from "components-ui/molecules/TeaCard";
//Types
import { ITeaTypes, TeasProps } from "types";
//Context
import { useSearchTeasContext } from "context/SearchTeas";
//Hooks
import { useWindowSize } from "usehooks-ts";
import styled from "@emotion/styled";

const MainPage = ({ teas }: TeasProps) => {
  const [visibleTeas, setVisibleTeas] = React.useState(16);
  const { memoFilterTeas } = useSearchTeasContext();
  const filteredData = memoFilterTeas(teas);
  const { width, height } = useWindowSize();
  const { colorMode } = useColorMode();
  const bg = useColorModeValue("mainBeige", "darkMode.main");

  const showMoreTeas = () => {
    setVisibleTeas((prev) => prev + 16);
  };

  return (
    <Flex flexDirection="column" alignItems="center" maxW={width} minH={height}>
      <Flex flexDirection="column" maxW="1440px" w="95%" my="12">
        <SearchBar teas={teas} />
        <Grid
          templateColumns="repeat(auto-fill, minmax(min(100%, 313px), 1fr))"
          gridColumn="1 / -1"
          gap="14"
          w="100%"
        >
          {filteredData.slice(0, visibleTeas).map((elem: ITeaTypes) => {
            return (
              <TeaCard
                key={elem.name}
                name={elem.name}
                country={elem.country.name}
                teaType={elem.typeOfTea.name}
                image={elem.image.url}
                slug={elem.slug}
              />
            );
          })}
        </Grid>
        {filteredData.length > visibleTeas && (
          <StyledButton
            alignSelf="center"
            w="150px"
            p="7"
            mt="10"
            bg={bg}
            boxShadow="mainShadow"
            _hover={
              colorMode === "light"
                ? { backgroundColor: "#fdf0d6" }
                : { backgroundColor: "darkMode.hover" }
            }
            _active={
              colorMode === "light"
                ? { backgroundColor: "#fdf0d6" }
                : { backgroundColor: "darkMode.hover" }
            }
            _focusVisible={
              colorMode === "light"
                ? { backgroundColor: "#fdf0d6" }
                : { backgroundColor: "darkMode.hover" }
            }
            fontSize="lg"
            onClick={showMoreTeas}
          >
            Load More
          </StyledButton>
        )}
        {filteredData.length === 0 && (
          <Flex justifyContent="center" alignItems="center" maxW="100%">
            <Heading>No results found</Heading>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

const StyledButton = styled(Button)`
  :focus:not([data-focus-visible-added]) {
    box-shadow: ${({ theme }) => theme.shadows.mainShadow};
  }
`;

export default MainPage;
