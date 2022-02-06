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
          p="1"
          w="auto"
          h="auto"
          fontSize="1.125rem"
          fontWeight="600"
          _hover={{ background: "none", color: "secondaryGreen" }}
          _active={{ color: "#8ab18a" }}
        >
          {children}
        </Button>
      </Link>
    </LinkBox>
  );
};

export default StyledLink;
