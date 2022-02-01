import Link from "next/link";
//Chakra-ui
import { Heading, Button, LinkBox } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Logo = () => {
  return (
    <LinkBox>
      <Link href="/" passHref>
        <ButtonStyled>
          <Heading fontWeight="700" fontSize="2rem" w="max-content">
            <SpanStyled>tea</SpanStyled>
            <span>-stash</span>
          </Heading>
        </ButtonStyled>
      </Link>
    </LinkBox>
  );
};

const SpanStyled = styled.span`
  color: #749b74;
`;

const ButtonStyled = styled(Button)`
  background: none;
  padding: 0;
  margin: 0;
  :hover {
    background: none;
    color: #749b74;
  }
`;

export default Logo;
