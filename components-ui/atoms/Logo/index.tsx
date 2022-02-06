import Link from "next/link";
//Chakra-ui
import { Heading, Button, LinkBox } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Logo = () => {
  return (
    <LinkBox>
      <Link href="/" passHref>
        <Button
          bg="none"
          p="1"
          _hover={{ background: "none", color: "secondaryGreen" }}
          _active={{ background: "none" }}
        >
          <Heading fontWeight="700" fontSize="2rem" w="max-content">
            <SpanStyled>tea</SpanStyled>
            <span>-stash</span>
          </Heading>
        </Button>
      </Link>
    </LinkBox>
  );
};

const SpanStyled = styled.span`
  color: #749b74;
`;

export default Logo;
