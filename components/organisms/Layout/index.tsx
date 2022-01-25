import * as React from "react";
//Chakra-ui
import { Box } from "@chakra-ui/react";
//Components
import Header from "components/organisms/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
