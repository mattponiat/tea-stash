//Chakra-ui
import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";

interface MoreInfoTypes {
  harvestDate: string;
  price: number;
}

const MoreInfo = ({ harvestDate, price }: MoreInfoTypes) => {
  const color = useColorModeValue("blackAlpha.800", "white");

  return (
    <Flex flexDirection="column" maxW="100%" color={color}>
      {harvestDate ? (
        <Heading as="h3" size="md" mb="2">
          Harvested in {harvestDate}
        </Heading>
      ) : null}
      <Heading as="h3" size="md">
        Sold for {price}$
      </Heading>
    </Flex>
  );
};

export default MoreInfo;
