//Chakra-ui
import { Flex, Grid } from "@chakra-ui/react";
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
    <Flex
      flexDirection="column"
      alignItems="center"
      maxW={width}
      minH={height - 88}
    >
      <Grid
        templateColumns="1fr"
        maxW="1420px"
        minW="75%"
        mx="2"
        mt="12"
        mb="10"
      >
        <SearchBar teas={teas} />
        <Grid
          templateColumns="repeat(auto-fill, minmax(313px, 1fr))"
          autoRows="1fr"
          gap="14"
          maxW="100%"
          mt="12"
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
      </Grid>
    </Flex>
  );
};

export default MainPage;
