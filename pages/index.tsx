import type { NextPage } from "next";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Teas - tea.stash</title>
      </Head>
    </Box>
  );
};

export default Home;
