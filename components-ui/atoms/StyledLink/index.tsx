import Link from "next/link";
import styled from "@emotion/styled";
import { LinkBox } from "@chakra-ui/react";

interface LinkTypes {
  href: string;
  children: React.ReactNode;
}

export const StyledLink: React.FC<LinkTypes> = ({ href, children }) => {
  return (
    <LinkBox w="fit-content" m="auto">
      <Link href={href} passHref>
        <CustomLink>{children}</CustomLink>
      </Link>
    </LinkBox>
  );
};

const CustomLink = styled.a`
  font-size: 1.125rem;
  font-weight: 600;

  :hover {
    color: #749b74;
  }
`;
