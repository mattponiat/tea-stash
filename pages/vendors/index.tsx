import Head from "next/head";
import { NextPage } from "next";
//Chakra-ui
import { Fade, useDisclosure } from "@chakra-ui/react";
//Components
import VendorsPage from "components-ui/organisms/VendorsPage";

const Vendors: NextPage = () => {
  const { isOpen } = useDisclosure();

  return (
    <Fade in={isOpen === false}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Vendors - tea-stash</title>
      </Head>
      <VendorsPage />
    </Fade>
  );
};

export default Vendors;
