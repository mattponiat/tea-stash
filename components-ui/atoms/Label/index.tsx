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
    <Heading
      size="lg"
      color="secondaryGreen"
      fontWeight="900"
      mt="1"
      {...props}
    >
      {children}
    </Heading>
  );
};

export default Label;
