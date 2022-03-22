import Image from "next/image";
//Chakra-ui
import { Box, Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
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
      minH={height - 100}
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
          gap="6"
        >
          <Box
            w={width <= 1150 ? "100%" : "80%"}
            borderRadius="8px"
            overflow="hidden"
          >
            <Image
              src={teas.image.url}
              alt={teas.name}
              layout="responsive"
              width="100"
              height="85"
              priority
            />
          </Box>
          <Flex
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
            maxW="100%"
            minH="100%"
            gap="6"
          >
            <Title teas={teas} />
            <MoreInfo teas={teas} />
            <Desc markdown={markdown} />
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default TeaInfoCard;
