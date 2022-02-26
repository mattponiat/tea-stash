//Chakra-ui
import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

const SearchLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box w="58px" minW="58px" textAlign="right" mr="3">
      <SpanStyled>{children}</SpanStyled>
    </Box>
  );
};

const SpanStyled = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export default SearchLabel;
