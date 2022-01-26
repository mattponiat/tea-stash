import * as React from "react";
//Chakra-ui
import { Box } from "@chakra-ui/react";
//Components
import Header from "components/organisms/Header";
import Body from "../Body";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Body />
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
