import Link from "next/link";
//Chakra-ui
import { Button, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface DrawerLinkTypes {
  href: string;
  children: React.ReactNode;
  onClose: () => void;
}

const StyledDrawerLink = ({ onClose, href, children }: DrawerLinkTypes) => {
  const bg = useColorModeValue("mainBeige", "darkMode.main");

  return (
    <Link href={href} passHref>
      <StyledButton
        onClick={onClose}
        minW="65%"
        p="35px"
        bg={bg}
        boxShadow="mainShadow"
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
    box-shadow: ${({ theme }) => theme.shadows.mainShadow};
  }
`;

export default StyledDrawerLink;
