import { Flex, Heading } from "@chakra-ui/react";
import { ITeaTypes } from "types";

const Title = ({ teas }: { teas: ITeaTypes }) => {
  return (
    <Flex flexDirection="column">
      <Heading as="h1" size="2xl" color="secondaryGreen.500">
        {teas.name}
      </Heading>
      <Heading as="h2" size="lg" color="GrayText" mt="2">
        {teas.typeOfTea.name} tea from{" "}
        {teas.city ? `${teas.city}, ${teas.country}` : teas.country}
      </Heading>
    </Flex>
  );
};

export default Title;
