import Link from "next/link";
//Chakra-ui
import { LinkBox, Button } from "@chakra-ui/react";

interface LinkTypes {
  href: string;
  children: React.ReactNode;
}

const StyledLink = ({ href, children }: LinkTypes) => {
  return (
    <LinkBox>
      <Link href={href} passHref>
        <Button
          bg="none"
          border="none"
          p="0px 6px"
          fontSize="1.125rem"
          fontWeight="600"
          _hover={{ background: "none", color: "secondaryGreen" }}
          _active={{ color: "#619b47" }}
          _focus={{ outline: "none", boxShadow: "none" }}
        >
          {children}
        </Button>
      </Link>
    </LinkBox>
  );
};

export default StyledLink;
