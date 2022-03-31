import Link from "next/link";
import Image from "next/image";
//Chakra-ui
import {
  Box,
  Flex,
  Heading,
  LinkBox,
  useColorModeValue,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
//Components
import Text from "components-ui/atoms/Text";

interface TeaCardProps {
  name: string;
  country: string;
  teaType: string;
  image: string;
  slug: string;
}

const TeaCard = ({ name, country, teaType, image, slug }: TeaCardProps) => {
  const bg = useColorModeValue("mainBeige", "darkMode.main");

  return (
    <Link href={`/${slug}`} passHref>
      <Wrapper
        as="a"
        draggable="false"
        display="flex"
        flexDirection="column"
        maxH="fit-content"
        minH="320px"
        minW="auto"
        bg={bg}
        borderRadius="8"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)"
        transition="box-shadow 0.2s, transform 0.2s"
        overflow="hidden"
        _hover={{
          boxShadow: "0px 2px 7px  rgba(0,0,0,0.25)",
          transform: "translateY(-2px)",
        }}
        _focus={{
          boxShadow: "0px 2px 4pxrgba(0, 0, 0, 0.2)",
          transform: "translateY(-2px)",
        }}
      >
        <Box maxW="100%" userSelect="none">
          <Image
            src={image}
            alt={name}
            layout="responsive"
            objectFit="cover"
            width="100px"
            height="50px"
            sizes="(max-width: 767px) 200px, (max-width: 991px) 200px, 300px"
            quality={30}
            priority
          />
        </Box>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          h="100%"
          p="3"
        >
          <Heading
            fontSize="1.625rem"
            color="secondaryGreen.500"
            fontWeight="900"
          >
            {name}
          </Heading>
          <Flex flexDirection="column">
            <Text>
              Country of origin: <b>{country}</b>
            </Text>
            <Text>
              Type of tea: <b>{teaType}</b>
            </Text>
          </Flex>
        </Flex>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled(LinkBox)`
  :focus:not([data-focus-visible-added]) {
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  }
`;

export default TeaCard;
