import { Flex, Heading } from "@chakra-ui/react";

interface TitleProps {
  name: string;
  teaType: string;
  city: string;
  country: string;
}

const Title = ({ name, teaType, city, country }: TitleProps) => {
  return (
    <Flex flexDirection="column">
      <Heading as="h1" size="2xl" color="secondaryGreen.500">
        {name}
      </Heading>
      <Heading as="h2" size="lg" color="GrayText" mt="2">
        {teaType} tea from {city ? `${city}, ${country}` : country}
      </Heading>
    </Flex>
  );
};

export default Title;
