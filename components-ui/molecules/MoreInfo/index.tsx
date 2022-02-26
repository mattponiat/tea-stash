//Chakra-ui
import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
//Types
import { ITeaTypes } from "types";

const MoreInfo = ({ teas }: { teas: ITeaTypes }) => {
  return (
    <Flex flexDirection="column" minH="auto">
      <SpanStyled>
        {teas.typeOfTea.name} tea from{" "}
        {teas.city ? `${teas.city}, ${teas.country}` : teas.country}
      </SpanStyled>
      {teas.harvestDate ? (
        <SpanStyled>Harvested in {teas.harvestDate ?? "-"}</SpanStyled>
      ) : null}
      <SpanStyled>Sold for {teas.price}$</SpanStyled>
    </Flex>
  );
};
const SpanStyled = styled.span`
  width: fit-content;
  height: fit-content;
  font-size: 1.5rem;
`;

export default MoreInfo;
