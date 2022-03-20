import * as React from "react";
//Chakra-ui
import {
  Flex,
  Grid,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
//Icons
import { HamburgerIcon } from "@chakra-ui/icons";
import { TeaIcon } from "icons/TeaIcon";
import StyledSunIcon from "components-ui/atoms/StyledSunIcon";
//Components
import Logo from "components-ui/atoms/Logo";
import NavBar from "components-ui/molecules/NavBar";
import StyledDrawerBody from "components-ui/molecules/StyledDrawerBody";
//Hooks
import { useWindowSize } from "usehooks-ts";

const Header = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { width } = useWindowSize();

  const btnRef = React.useRef();
  const isSmall = width < 768;

  const bg = useColorModeValue("mainBeige", "darkMode.main");
  const bgDrawer = useColorModeValue("white", "gray.800");

  React.useEffect(() => {
    setIsLoading(false);
  });

  return (
    <Flex
      as="header"
      position="sticky"
      justifyContent="center"
      maxW={width}
      minH="100px"
      bg={bg}
      boxShadow="0px 0px 1px"
      zIndex={1}
    >
      {isLoading === false && (
        <Grid
          templateColumns={
            isSmall ? "1fr 1fr" : "auto minmax(max-content, 100%) auto"
          }
          justifyItems={isSmall ? "" : "center"}
          alignItems="center"
          maxW="1440px"
          w="95%"
        >
          <Logo />
          {isSmall ? (
            <>
              <Flex justifyContent="end">
                <IconButton
                  ref={btnRef.current}
                  onClick={onOpen}
                  aria-label="Navbar"
                  icon={<HamburgerIcon />}
                  color="secondaryGreen.500"
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
              </Flex>
              <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement="right"
                finalFocusRef={btnRef.current}
              >
                <DrawerOverlay />
                <StyledDrawerContent bg={bgDrawer} boxShadow="1px 0px 1px">
                  <DrawerHeader
                    bg={bg}
                    boxShadow="1px 0px 1px"
                    minH="100px"
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                  >
                    <TeaIcon boxSize="5rem" fill="secondaryGreen.500" />
                    <Text ml="1" mt="3" fontSize="28px">
                      Welcome!
                    </Text>
                  </DrawerHeader>
                  <StyledDrawerBody onClose={onClose} />
                  <DrawerFooter></DrawerFooter>
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
      )}
    </Flex>
  );
};

const StyledDrawerContent = styled(DrawerContent)`
  :focus:not([data-focus-visible-added]) {
    box-shadow: 0px -2px 10px inset rgba(0, 0, 0, 0.2);
  }
`;

export default Header;
