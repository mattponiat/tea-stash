import Link from "next/link";
import Image from "next/image";
//Chakra-ui
import { Flex, Grid, LinkBox, LinkOverlay } from "@chakra-ui/react";
import styled from "@emotion/styled";
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
      w="17rem"
      h="19rem"
      mb="5.45rem"
      bg="mainBeige"
      borderRadius="8"
      boxShadow="rgba(0, 0, 0, 0.2) 0px 2px 4px;"
      transition="box-shadow, 0.2s ease-in-out"
      _hover={{
        boxShadow: "0px 2px 7px  rgba(0,0,0,0.25)",
        transform: "translateY(-2px)",
      }}
    >
      <Link href={`/${slug}`} passHref>
        <LinkOverlay>
          <ImageStyled
            src={image}
            alt={name}
            layout="responsive"
            objectFit="cover"
            width="300px"
            height="170px"
          />
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            p="3"
            minH="49.4%"
          >
            <Label>{name}</Label>
            <Grid templateColumns="1fr">
              <Text>
                Country of origin: <b>{country}</b>
              </Text>
              <Text>
                Type of tea: <b>{type}</b>
              </Text>
            </Grid>
          </Flex>
        </LinkOverlay>
      </Link>
    </LinkBox>
  );
};

const ImageStyled = styled(Image)`
  border-radius: 8px;
`;

export default TeaCard;
