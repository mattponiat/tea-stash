//Chakra-ui
import { Flex } from "@chakra-ui/react";
//Components
import AboutHeader from "components-ui/molecules/AboutHeader";
import AboutDesc from "components-ui/molecules/AboutDesc";
//Hooks
import { useWindowSize } from "usehooks-ts";

const AboutPage = () => {
  const { width, height } = useWindowSize();

  return (
    <Flex flexDirection="column" alignItems="center" maxW={width} minH={height}>
      <Flex
        flexDirection="column"
        alignItems="center"
        maxW="1440px"
        w="95%"
        minH="auto"
        my="12"
      >
        <AboutHeader />
        <AboutDesc />
      </Flex>
    </Flex>
  );
};

export default AboutPage;
