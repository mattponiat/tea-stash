import * as React from "react";
//Chakra-ui
import { Box, Button } from "@chakra-ui/react";

const ButtonComp = ({ children, ...props }: any) => {
  return (
    <Box>
      <Button {...props}>{children}</Button>
    </Box>
  );
};

export default ButtonComp;
