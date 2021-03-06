import Image from "next/image";
import Link from "next/link";
//Chakra-ui
import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface VendorsListProps {
  logo: string;
  name: string;
  href: string;
}

const VendorsList = ({ logo, name, href }: VendorsListProps) => {
  const bg = useColorModeValue("mainBeige", "gray.700");

  return (
    <Link href={href} passHref>
      <Wrapper
        as="a"
        target="_blank"
        justifyContent="start"
        alignItems="center"
        minH="50px"
        maxW="100%"
        bg={bg}
        borderRadius="8px"
        boxShadow="mainShadow"
        overflow="hidden"
      >
        <Box w="50px" h="50px" borderRadius="8px" userSelect="none">
          <Image
            src={logo}
            alt="Site Logo"
            objectFit="cover"
            layout="fixed"
            width="50px"
            height="50px"
          />
        </Box>
        <Flex justifyContent="center" alignItems="center" ml="3">
          <Heading as="h2" size="md">
            {name}
          </Heading>
        </Flex>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled(Flex)`
  :focus:not([data-focus-visible-added]) {
    box-shadow: ${({ theme }) => theme.shadows.mainShadow};
  }
`;

export default VendorsList;
