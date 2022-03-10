//Chakra-ui
import { Heading } from "@chakra-ui/react";

export const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <Heading fontSize="1.625rem" color="secondaryGreen" fontWeight="900">
      {children}
    </Heading>
  );
};

export default Label;
