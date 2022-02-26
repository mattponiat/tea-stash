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
        <Grid
          h="auto"
          mt="10"
          gap="10"
          templateColumns={"450px 1fr"}
          bg="white"
        >
          <Image
            alt={teas.name}
            src={teas.image.url}
            objectFit="contain"
            width="250px"
            height="300px"
            priority
          />
          <Flex flexDirection="column" gap="15px" p="3">
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
