//Chakra-ui
import { Flex, Grid } from "@chakra-ui/react";
//Components
import SearchBar from "components-ui/organisms/SearchBar";
import TeaCard from "components-ui/molecules/TeaCard";
//Types
import { ITeaTypes, TeasProps } from "types";
//Context
import { useSearchTeasContext } from "context/SearchTeas";

const MainPage = ({ teas }: TeasProps) => {
  const { filterTeas } = useSearchTeasContext();

  const filteredData = filterTeas(teas);

  return (
    <Flex flexDirection="column" alignItems="center" h="auto">
      <SearchBar teas={teas} />
      <Grid
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        placeItems="center"
        w="75%"
        h="auto"
      >
        {filteredData.map((elem: ITeaTypes) => {
          return (
            <TeaCard
              key={elem.name}
              name={elem.name}
              country={elem.country}
              type={elem.typeOfTea.name}
              image={elem.image.url}
              slug={elem.slug}
            />
          );
        })}
      </Grid>
    </Flex>
  );
};

export default MainPage;
