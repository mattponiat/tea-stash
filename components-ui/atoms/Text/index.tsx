//Chakra-ui
import styled from "@emotion/styled";

export const Text = ({ children }: { children: React.ReactNode }) => {
  return <SpanStyled>{children}</SpanStyled>;
};

const SpanStyled = styled.span`
  font-size: 1rem;
  margin-top: 5px;
`;

export default Text;
