//Chakra-ui
import { Flex, Heading } from "@chakra-ui/react";
//Types
import { ITeaTypes } from "types";

const MoreInfo = ({ teas }: { teas: ITeaTypes }) => {
  return (
    <Flex flexDirection="column" maxW="100%" color="blackAlpha.800">
      {teas.harvestDate ? (
        <Heading as="h3" size="md" mb="2">
          Harvested in {teas.harvestDate ?? "-"}
        </Heading>
      ) : null}
      <Heading as="h3" size="md">
        Sold for {teas.price}$
      </Heading>
    </Flex>
  );
};

export default MoreInfo;
