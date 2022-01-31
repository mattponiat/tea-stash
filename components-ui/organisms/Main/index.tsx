import * as React from "react";
//Chakra-ui
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledBox w="100vw" minHeight="90vh" h="auto" as="main">
      {children}
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  //background
`;
export default Main;
