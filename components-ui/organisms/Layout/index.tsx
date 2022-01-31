import * as React from "react";
//Chakra-ui
import { Box } from "@chakra-ui/react";
//Components
import Header from "components-ui/organisms/Header";
import Main from "components-ui/organisms/Main";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
