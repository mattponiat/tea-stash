//Chakra-ui
import { Flex, Grid, Heading } from "@chakra-ui/react";
//Components
import SearchBar from "components-ui/organisms/SearchBar";
import TeaCard from "components-ui/molecules/TeaCard";
//Types
import { ITeaTypes, TeasProps } from "types";
//Context
import { useSearchTeasContext } from "context/SearchTeas";
//Hooks
import { useWindowSize } from "usehooks-ts";

const MainPage = ({ teas }: TeasProps) => {
  const { filterTeas } = useSearchTeasContext();
  const filteredData = filterTeas(teas);
  const { width, height } = useWindowSize();

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
          {filteredData.map((elem: ITeaTypes) => {
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
        {filteredData.length === 0 && (
          <Flex justifyContent="center" alignItems="center" maxW="100%">
            <Heading>No results found</Heading>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default MainPage;
