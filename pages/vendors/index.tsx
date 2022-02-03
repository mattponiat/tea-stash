import Head from "next/head";
import { NextPage } from "next";
//Chakra-ui
import { Box } from "@chakra-ui/react";

const vendors: NextPage = () => {
  // const { isOpen } = useDisclosure();
  return (
    // <Fade in={isOpen === false}>
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Vendors - tea-stash</title>
      </Head>
      <Box></Box>
    </>
    // </Fade>
  );
};

export default vendors;
