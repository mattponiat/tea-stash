import Head from "next/head";
import { NextPage } from "next";
//Chakra-ui
import { Fade, useDisclosure } from "@chakra-ui/react";

const Vendors: NextPage = () => {
  const { isOpen } = useDisclosure();
  return (
    <Fade in={isOpen === false}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Vendors - tea-stash</title>
      </Head>
    </Fade>
  );
};

export default Vendors;
