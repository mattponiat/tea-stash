import * as React from "react";
//Chakra-ui
// import { Box } from "@chakra-ui/react";
//Components
import Header from "components-ui/organisms/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
