import * as React from "react";
//Chakra-ui
import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

const ButtonStyled = ({ children }: { children: React.ReactNode }) => {
  return <NewButton>{children}</NewButton>;
};

const NewButton = styled(Button)`
  background: none;
  font-size: 18px;
  padding: 0;
  margin-inline: 0.5rem;

  :focus {
    box-shadow: none;
  }

  :hover {
    background: inherit;
    color: #749b74;
  }
`;

export default ButtonStyled;
