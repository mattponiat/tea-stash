import Image from "next/image";
//Chakra-ui
import { Flex, Grid } from "@chakra-ui/react";
//Components
import Desc from "components-ui/atoms/Desc";
import MoreInfo from "components-ui/molecules/MoreInfo";
import Title from "components-ui/atoms/Title";
//Types
import { ITeaTypes } from "types";

const TeaInfoCard = ({
  teas,
  markdown,
}: {
  teas: ITeaTypes;
  markdown: JSX.Element;
}) => {
  return (
    <Flex h="840px" w="100%" justifyContent="center">
      <Flex
        h="100%"
        w="75%"
        flexDirection="column"
        alignItems="center"
        bg="white"
      >
        <Title teas={teas} />
        <Grid
          h="auto"
          mt="10"
          gap="10"
          templateColumns={"20rem 1fr"}
          bg="white"
        >
          <Image
            alt={teas.name}
            src={teas.image.url}
            objectFit="contain"
            width="250px"
            height="300px"
          />
          <Desc markdown={markdown} />
        </Grid>
        <Flex justifyContent="center" minH="auto" w="100%" bg="white">
          <MoreInfo teas={teas} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TeaInfoCard;
