import * as React from "react";
import NextLink from "next/link";
//Chakra-ui
import { Heading, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
//Components
import ButtonStyled from "../ButtonStyled";

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
  color: green;
`;

export default Logo;
