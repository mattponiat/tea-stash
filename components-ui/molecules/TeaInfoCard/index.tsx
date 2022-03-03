import Image from "next/image";
//Chakra-ui
import { Box, Flex, Grid } from "@chakra-ui/react";
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

  return (
    <Flex minH={height - 100} maxW={width} justifyContent="center">
      <Flex
        minH="100%"
        maxW="1440px"
        w="95%"
        flexDirection="column"
        alignItems="center"
        bg="white"
      >
        <Grid
          templateColumns="repeat(auto-fit, minmax(343px, 1fr))"
          autoRows="auto auto"
          alignItems="center"
          justifyItems="center"
          gap="10"
          maxW="1440px"
          w="100%"
          my="12"
          p="3"
        >
          <Box w="70%">
            <Image
              alt={teas.name}
              src={teas.image.url}
              layout="responsive"
              width="90"
              height="80"
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
