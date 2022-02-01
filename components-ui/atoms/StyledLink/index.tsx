import Link from "next/link";
//Chakra-ui
import styled from "@emotion/styled";
import { LinkBox, Button } from "@chakra-ui/react";

interface LinkTypes {
  href: string;
  children: React.ReactNode;
}

const StyledLink: React.FC<LinkTypes> = ({ href, children }) => {
  return (
    <LinkBox>
      <Link href={href} passHref>
        <CustomButton>{children}</CustomButton>
      </Link>
    </LinkBox>
  );
};

const CustomButton = styled(Button)`
  background: none;
  border: none;
  padding: 1;
  width: auto;
  height: auto;
  font-size: 1.125rem;
  font-weight: 600;

  :hover {
    background: none;
    color: #749b74;
  }
`;

export default StyledLink;
