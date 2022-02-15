//Chakra-ui
import styled from "@emotion/styled";

const SearchLabel = ({ children }: { children: React.ReactNode }) => {
  return <SpanStyled>{children}</SpanStyled>;
};

const SpanStyled = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export default SearchLabel;
