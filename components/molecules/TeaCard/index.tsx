import * as React from "react";
import Link from "next/link";
//Chakra-ui
import { Flex, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
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
    <LinkBox
      w="18rem"
      h="19rem"
      m="4"
      pb="2"
      bg="mainBeige"
      borderRadius="8"
      boxShadow="0px 0px 4px"
      _hover={{ boxShadow: "0px 0px 6px" }}
    >
      <Link href={`/${slug}`} passHref>
        <LinkOverlay>
          <Image
            src={image}
            alt={`${name}`}
            boxSize="fit-content"
            objectFit="cover"
            w="100%"
            h="50%"
            borderRadius="8"
          />
          <Flex flexDirection="column" p="2">
            <Label>{name}</Label>
            <Text>
              Country of origin: <b>{country}</b>
            </Text>
            <Text>
              Type of tea: <b>{type}</b>
            </Text>
          </Flex>
        </LinkOverlay>
      </Link>
    </LinkBox>
  );
};

export default TeaCard;
