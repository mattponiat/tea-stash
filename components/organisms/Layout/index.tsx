import * as React from "react";
//Chakra-ui
import { Box } from "@chakra-ui/react";
//Components
import Header from "components-ui/organisms/Header";
import Main from "components/organisms/Main";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Box>{children}</Box>
      </Main>
    </>
  );
};

export default Layout;
