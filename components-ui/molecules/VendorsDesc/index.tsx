//Chakra-ui
import { Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const VendorsDesc = () => {
  const bg = useColorModeValue("mainBeige", "gray.700");

  return (
    <Flex
      flexDirection="column"
      maxW="400px"
      minH="auto"
      p="3"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)"
      borderRadius="8px"
      bg={bg}
    >
      <Flex justifyContent="center" mb="3">
        <Heading as="h1" size="xl" color="secondaryGreen.500">
          Vendors
        </Heading>
      </Flex>
      <Text fontSize="lg">
        Here’s the list of all the vendors used for getting the images,
        information, pricing etc.
      </Text>
    </Flex>
  );
};

export default VendorsDesc;
