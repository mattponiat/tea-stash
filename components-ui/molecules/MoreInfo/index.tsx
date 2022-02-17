//Chakra-ui
import { Grid } from "@chakra-ui/react";
import styled from "@emotion/styled";
//Types
import { ITeaTypes } from "types";

const MoreInfo = ({ teas }: { teas: ITeaTypes }) => {
  return (
    <Grid
      templateColumns="repeat(auto-fit, minmax(160px, 1fr))"
      placeItems="center"
      h="fit-content"
      minH="3.7rem"
      w="80%"
      mt="44"
      mb="16"
      bg="mainBeige"
      borderRadius="8px"
      boxShadow="rgba(0, 0, 0, 0.2) 0px 1px 4px;"
    >
      <SpanStyled>
        Type: <b>{teas.typeOfTea.name}</b>
      </SpanStyled>
      <SpanStyled>
        Country: <b>{teas.country}</b>
      </SpanStyled>
      <SpanStyled>
        City: <b>{teas.city ?? "-"}</b>
      </SpanStyled>
      <SpanStyled>
        Harvest Date: <b>{teas.harvestDate ?? "-"}</b>
      </SpanStyled>
      <SpanStyled>
        Price: <b>{teas.price}$</b>
      </SpanStyled>
    </Grid>
  );
};

const SpanStyled = styled.span`
  width: fit-content;
  height: fit-content;
  margin: 3px 10px 3px 13px;
  font-size: 1.125rem;
`;

export default MoreInfo;
