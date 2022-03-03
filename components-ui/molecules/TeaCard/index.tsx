import Link from "next/link";
import Image from "next/image";
//Chakra-ui
import { Box, Flex, LinkBox } from "@chakra-ui/react";
//Components
import Label from "components-ui/atoms/Label";
import Text from "components-ui/atoms/Text";

interface TeaCardProps {
  name: string;
  country: string;
  type: string;
  image: string;
  slug: string;
}

const TeaCard = ({ name, country, type, image, slug }: TeaCardProps) => {
  return (
    <Link href={`/${slug}`} passHref>
      <LinkBox
        as="a"
        draggable="false"
        display="flex"
        flexDirection="column"
        maxH="fit-content"
        minH="320px"
        minW="auto"
        bg="mainBeige"
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
        <Box maxW="100%">
          <Image
            src={image}
            alt={name}
            layout="responsive"
            objectFit="cover"
            width="100px"
            height="50px"
            priority
          />
        </Box>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          h="100%"
          p="3"
        >
          <Label>{name}</Label>
          <Flex flexDirection="column">
            <Text>
              Country of origin: <b>{country}</b>
            </Text>
            <Text>
              Type of tea: <b>{type}</b>
            </Text>
          </Flex>
        </Flex>
      </LinkBox>
    </Link>
  );
};
export default TeaCard;
