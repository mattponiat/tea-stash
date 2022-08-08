import Link from "next/link";
//Chakra-ui
import { LinkBox, Button } from "@chakra-ui/react";

interface LinkTypes {
  href: string;
  children: React.ReactNode;
}

const StyledLink = ({ href, children }: LinkTypes) => {
  return (
    <LinkBox textAlign="center">
      <Link href={href} passHref>
        <Button
          bg="none"
          border="none"
          p="0 6px"
          fontSize="1.25rem"
          fontWeight="600"
          _hover={{ backgroundColor: "none", color: "secondaryGreen.500" }}
          _active={{ color: "" }}
        >
          {children}
        </Button>
      </Link>
    </LinkBox>
  );
};

export default StyledLink;
