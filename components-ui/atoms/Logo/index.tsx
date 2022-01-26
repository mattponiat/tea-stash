import * as React from "react";
import NextLink from "next/link";
//Chakra-ui
import { Heading, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <LinkStyled>
        <Heading fontWeight="700" fontSize="32px" w="max-content">
          <SpanStyled>tea</SpanStyled>
          <span>-stash</span>
        </Heading>
      </LinkStyled>
    </NextLink>
  );
};

const SpanStyled = styled.span`
  color: green;
`;

const LinkStyled = styled(Link)`
  :hover {
    text-decoration: none;
  }
`;

export default Logo;
