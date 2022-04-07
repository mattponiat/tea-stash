//Chakra-ui
import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";

const AboutHeader = () => {
  const bg = useColorModeValue("mainBeige", "gray.700");

  return (
    <Flex
      justifyContent="center"
      maxW="100%"
      w="100%"
      p="3"
      mb="12"
      bg={bg}
      borderRadius="8px"
      boxShadow="mainShadow"
    >
      <Heading as="h1" size="2xl" color="secondaryGreen.500">
        About
      </Heading>
    </Flex>
  );
};

export default AboutHeader;
