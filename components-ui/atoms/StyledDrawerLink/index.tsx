import Link from "next/link";
//Chakra-ui
import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface DrawerLinkTypes {
  href: string;
  children: React.ReactNode;
  onClose: () => void;
}

const StyledDrawerLink = ({ onClose, href, children }: DrawerLinkTypes) => {
  return (
    <Link href={href} passHref>
      <StyledButton
        onClick={onClose}
        minW="65%"
        p="35px"
        my="30"
        bg="mainBeige"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)"
        fontSize="1.75rem"
        _hover={{ background: "none", color: "secondaryGreen" }}
        _active={{ color: "#619b47" }}
      >
        {children}
      </StyledButton>
    </Link>
  );
};

const StyledButton = styled(Button)`
  :focus:not([data-focus-visible-added]) {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export default StyledDrawerLink;
