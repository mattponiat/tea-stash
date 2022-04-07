//Chakra-ui
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

const AboutDesc = () => {
  const bg = useColorModeValue("mainBeige", "gray.700");

  return (
    <Flex
      flexDirection="column"
      alignItems="start"
      maxW="100%"
      w="100%"
      p="3"
      bg={bg}
      borderRadius="8px"
      boxShadow="mainShadow"
    >
      <Text fontSize="2xl">
        Tea-stash is a place to get information about teas from all over the
        world.
        <br />
        Since I’m passionate about tea, I decided to create this website to let
        people have an easy way to find out more about teas.
        <br />
        <br />
        I hope you enjoy the website and find it useful.
        <br />
        <br />
      </Text>
      <Text fontSize="xl">
        If you have any questions or suggestions feel free to contact me at{" "}
        <Text as="span" color="secondaryGreen.500">
          pinkyball50@gmail.com
        </Text>{" "}
        or at my discord{" "}
        <Text as="span" color="secondaryGreen.500">
          young chudy#6460
        </Text>
      </Text>
      <Text fontSize="xl" mt="2">
        If you want to see the source code, feel free to check it out at{" "}
        <Text
          as="a"
          target="_blank"
          href="https://github.com/mattponiat/tea-stash"
          color="secondaryGreen.500"
        >
          github
        </Text>
      </Text>
    </Flex>
  );
};

export default AboutDesc;
