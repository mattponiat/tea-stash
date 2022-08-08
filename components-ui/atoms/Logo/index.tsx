import Link from "next/link";
//Chakra-ui
import { Button, LinkBox } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Logo = () => {
  return (
    <LinkBox minW="150px">
      <Link href="/" passHref>
        <Button
          bg="none"
          p="0"
          fontWeight="black"
          fontSize="2rem"
          _hover={{ backgroundColor: "none", color: "secondaryGreen.500" }}
          _active={{
            backgroundColor: "none",
            outline: "none",
            boxShadow: "none",
          }}
        >
          <SpanStyled>tea</SpanStyled>
          <span>-stash</span>
        </Button>
      </Link>
    </LinkBox>
  );
};

const SpanStyled = styled.span`
  color: ${({ theme }) => theme.colors.secondaryGreen[500]};
`;

export default Logo;
