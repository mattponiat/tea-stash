import * as React from "react";
//Chakra-ui
import { Box, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Logo = () => {
  return (
    <Box>
      <Heading fontWeight="bold" fontSize="32px" w="max-content">
        <SpanStyled>tea-</SpanStyled>
        stash
      </Heading>
    </Box>
  );
};

const SpanStyled = styled.span`
  color: green;
`;

export default Logo;
