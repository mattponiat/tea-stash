import * as React from "react";
//Chakra-ui
import { Heading } from "@chakra-ui/react";

export const Label = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <Heading color="secondaryGreen" fontWeight="black" {...props}>
      {children}
    </Heading>
  );
};

export default Label;
