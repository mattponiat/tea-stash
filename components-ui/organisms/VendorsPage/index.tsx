//Chakra-ui
import { Flex } from "@chakra-ui/react";
//Components
import VendorsDesc from "components-ui/molecules/VendorsDesc";
import VendorsListContainer from "components-ui/organisms/VendorsListContainer";
//Hooks
import { useWindowSize } from "usehooks-ts";

const VendorsPage = () => {
  const { width, height } = useWindowSize();

  return (
    <Flex flexDirection="column" alignItems="center" maxW={width} minH={height}>
      <Flex
        flexDirection="column"
        alignItems="center"
        maxW="500px"
        w="95%"
        minH="auto"
        my="12"
      >
        <VendorsDesc />
        <VendorsListContainer />
      </Flex>
    </Flex>
  );
};

export default VendorsPage;
