import * as React from "react";
//Chakra-ui
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Main = ({ children }: { children: React.ReactNode }) => {
  return <StyledBox as="main">{children}</StyledBox>;
};

const StyledBox = styled(Box)`
  width: 100vw;
  min-height: 100%;
  height: max-content;
  background-color: cyan;
`;
export default Main;
