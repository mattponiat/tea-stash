import Image from "next/image";
//Chakra-ui
import { Box, Flex, Grid, useColorModeValue } from "@chakra-ui/react";
//Components
import Desc from "components-ui/atoms/Desc";
import MoreInfo from "components-ui/molecules/MoreInfo";
import Title from "components-ui/atoms/Title";
//Types
import { ITeaTypes } from "types";
//Hooks
import { useWindowSize } from "usehooks-ts";

const TeaInfoCard = ({
  teas,
  markdown,
}: {
  teas: ITeaTypes;
  markdown: JSX.Element;
}) => {
  const { width, height } = useWindowSize();

  const bg = useColorModeValue("white", "gray.800");

  return (
    <Flex
      minH={height}
      maxW={width}
      justifyContent="center"
      bg={width <= 1530 ? bg : ""}
    >
      <Flex
        minH="100%"
        maxW="1440px"
        w="95%"
        flexDirection="column"
        alignItems="center"
        bg={bg}
      >
        <Grid
          templateColumns="repeat(auto-fit, minmax(353px, 1fr))"
          alignItems="center"
          justifyItems={width <= 768 ? "center" : "start"}
          maxW="1440px"
          w="100%"
          my="12"
          gap={width <= 1150 ? "6" : "0"}
        >
          <Box
            w={width <= 1150 ? "100%" : "80%"}
            borderRadius="8px"
            overflow="hidden"
            userSelect="none"
          >
            <Image
              src={teas.image.url}
              alt={teas.name}
              layout="responsive"
              objectFit="cover"
              width="90"
              height="88"
              priority
            />
          </Box>
          <Flex
            flexDirection="column"
            alignItems="start"
            maxW="100%"
            minH="100%"
            gap="6"
          >
            <Title
              name={teas.name}
              teaType={teas.typeOfTea.name}
              city={teas.city}
              country={teas.country.name}
            />
            <MoreInfo harvestDate={teas.harvestDate} price={teas.price} />
            <Desc markdown={markdown} />
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default TeaInfoCard;
