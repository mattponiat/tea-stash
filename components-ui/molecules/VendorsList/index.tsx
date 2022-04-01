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
        maxW="400px"
        w="100%"
        minH="50px"
        bg={bg}
        borderRadius="8px"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.2)"
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
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export default VendorsList;
