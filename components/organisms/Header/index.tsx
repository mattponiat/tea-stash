import * as React from "react";
//Chakra-ui
import {
  Flex,
  Grid,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
} from "@chakra-ui/react";
//Icons
import { HamburgerIcon } from "@chakra-ui/icons";
//Components
import Logo from "components-ui/atoms/Logo";
import NavBar from "components-ui/molecules/NavBar";
import StyledSunIcon from "components-ui/atoms/StyledSunIcon";
import StyledDrawerBody from "components-ui/molecules/StyledDrawerBody";
//Hooks
import { useWindowSize } from "usehooks-ts";
import styled from "@emotion/styled";

const Header = () => {
  const { width } = useWindowSize();
  const isSmall = width < 768;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      as="header"
      position="sticky"
      justifyContent="center"
      maxW={width}
      minH="100px"
      bg="mainBeige"
      boxShadow="0px 0px 1px"
      zIndex={1}
    >
      <Grid
        templateColumns={
          isSmall ? "1fr max-content" : "auto minmax(max-content, 100%) auto"
        }
        justifyItems={isSmall ? "space-between" : "center"}
        alignItems="center"
        maxW="1440px"
        w="95%"
      >
        <Logo />
        {isSmall ? (
          <>
            <IconButton
              ref={btnRef.current}
              onClick={onOpen}
              aria-label="Navbar"
              icon={<HamburgerIcon />}
              color="secondaryGreen"
              bg="none"
              border="none"
              p="0"
              fontSize="32px"
              _hover={{
                background: "none",
              }}
              _active={{
                background: "none",
              }}
            />
            <Drawer
              isOpen={isOpen}
              onClose={onClose}
              placement="right"
              finalFocusRef={btnRef.current}
            >
              <DrawerOverlay />
              <StyledDrawerContent
                bg="mainBeige"
                boxShadow="0px -2px 10px inset rgba(0, 0, 0, 0.2)"
              >
                <DrawerCloseButton p="20px" fontSize="20px" />
                <StyledDrawerBody onClose={onClose} />
              </StyledDrawerContent>
            </Drawer>
          </>
        ) : (
          <>
            <NavBar />
            <Flex minW="150px" justifyContent="end">
              <StyledSunIcon />
            </Flex>
          </>
        )}
      </Grid>
    </Flex>
  );
};

const StyledDrawerContent = styled(DrawerContent)`
  :focus:not([data-focus-visible-added]) {
    box-shadow: 0px -2px 10px inset rgba(0, 0, 0, 0.2);
  }
`;

export default Header;
