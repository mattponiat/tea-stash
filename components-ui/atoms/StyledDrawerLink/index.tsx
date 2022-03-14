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
        bg="mainBeige"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)"
        borderRadius="8"
        fontSize="1.625rem"
        _hover={{ color: "secondaryGreen.500" }}
        _active={{ color: "secondaryGreen.400" }}
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
