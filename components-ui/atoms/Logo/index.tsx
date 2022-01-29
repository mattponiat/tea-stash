import * as React from "react";
import NextLink from "next/link";
//Chakra-ui
import { Button, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Logo = () => {
  return (
    <ButtonStyled>
      <NextLink href="/" passHref>
        <Heading fontWeight="700" fontSize="32px" w="max-content">
          <SpanStyled>tea</SpanStyled>
          <span>-stash</span>
        </Heading>
      </NextLink>
    </ButtonStyled>
  );
};

const SpanStyled = styled.span`
  color: #749b74;
`;

const ButtonStyled = styled(Button)`
  min-width: max-content;
  padding: 1px;
  background: none;
  margin-right: auto;

  :hover {
    background: none;
    box-shadow: none;
    color: #749b74;
  }
`;

export default Logo;
