import Head from "next/head";
import { NextPage } from "next";
//Chakra-ui
import { Fade, useDisclosure } from "@chakra-ui/react";
//Components
import AboutPage from "components-ui/organisms/AboutPage";

const About: NextPage = () => {
  const { isOpen } = useDisclosure();

  return (
    <Fade in={isOpen === false}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About - tea-stash</title>
      </Head>
      <AboutPage />
    </Fade>
  );
};

export default About;
