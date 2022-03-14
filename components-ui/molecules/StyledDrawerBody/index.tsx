//Chakra-ui
import { DrawerBody } from "@chakra-ui/react";
//Components
import StyledDrawerLink from "components-ui/atoms/StyledDrawerLink";

const StyledDrawerBody = ({ onClose }: { onClose: () => void }) => {
  return (
    <DrawerBody
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="4rem"
    >
      <StyledDrawerLink href="/" onClose={onClose}>
        Teas
      </StyledDrawerLink>
      <StyledDrawerLink href="/vendors" onClose={onClose}>
        Vendors
      </StyledDrawerLink>
      <StyledDrawerLink href="/about" onClose={onClose}>
        About
      </StyledDrawerLink>
    </DrawerBody>
  );
};

export default StyledDrawerBody;
