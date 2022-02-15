import { Heading } from "@chakra-ui/react";
import { ITeaTypes } from "types";

const Title = ({ teas }: { teas: ITeaTypes }) => {
  return (
    <Heading color="secondaryGreen" mt="10">
      {teas.name}
    </Heading>
  );
};

export default Title;
