import * as React from "react";
//Chakra-ui
import { Flex, Grid } from "@chakra-ui/react";
//Components
import SearchBar from "components/molecules/SearchBar";
import TeaCard from "components/molecules/TeaCard";
//Types
import { ITeaTypes } from "types";
import { TeasProps } from "types";

const MainPage = ({ teas }: TeasProps) => {
  return (
    <Flex flexDirection="column" alignItems="center" marginTop="1" h="auto">
      <SearchBar teas={teas} />
      <Grid
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        placeItems="center"
        // border="1px solid black"
        w="75%"
        h="auto"
      >
        {teas.map((elem: ITeaTypes, i: number) => {
          return (
            <TeaCard
              key={i + 1}
              name={elem.name}
              country={elem.country}
              type={elem.typeOfTea.name}
              image={elem.coverImage}
              slug={elem.slug}
            />
          );
        })}
      </Grid>
    </Flex>
  );
};

export default MainPage;
