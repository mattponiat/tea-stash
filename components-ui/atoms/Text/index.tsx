//Chakra-ui
import styled from "@emotion/styled";

export const Text = ({ children, ...props }: { children: React.ReactNode }) => {
  return <SpanStyled {...props}>{children}</SpanStyled>;
};

const SpanStyled = styled.span`
  font-size: 1rem;
  margin-top: 8px;
`;

export default Text;
