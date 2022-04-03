//Chakra-ui
import { Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const VendorsDesc = () => {
  const bg = useColorModeValue("mainBeige", "gray.700");

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      maxW="100%"
      w="100%"
      minH="auto"
      p="3"
      boxShadow="mainShadow"
      borderRadius="8px"
      bg={bg}
    >
      <Heading as="h1" size="2xl" color="secondaryGreen.500" mb="3">
        Vendors
      </Heading>
      <Text fontSize="xl">
        Here’s the list of all the vendors used for getting the images,
        information, pricing etc.
      </Text>
    </Flex>
  );
};

export default VendorsDesc;
