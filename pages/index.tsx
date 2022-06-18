import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
//Apollo client
import { gql } from "@apollo/client";
import client from "apolloClient";
//Chakra-ui
import { Fade, useDisclosure } from "@chakra-ui/react";
//Components
import MainPage from "components/organisms/MainPage";
//Types
import { TeasProps } from "types";
//Context provider
import { SearchTeasProvider } from "context/SearchTeas";

const Home: NextPage<TeasProps> = ({ teas }) => {
  const { isOpen } = useDisclosure();

  return (
    <Fade in={isOpen === false}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Teas - tea-stash</title>
      </Head>
      <SearchTeasProvider>
        <MainPage teas={teas} />
      </SearchTeasProvider>
    </Fade>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        teas {
          name
          country {
            name
          }
          image {
            url
          }
          slug
          typeOfTea {
            name
          }
        }
      }
    `,
  });

  const { teas }: TeasProps = data;

  return {
    props: {
      teas,
    },
  };
};

export default Home;
