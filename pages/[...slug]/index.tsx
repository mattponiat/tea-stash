import Head from "next/head";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
//Apollo client
import { gql } from "@apollo/client";
import client from "apolloClient";
//Chakra-ui
import { Box, Fade, Heading, Text, useDisclosure } from "@chakra-ui/react";
//Types
import { ITeaTypes } from "types";
import { ParsedUrlQuery } from "querystring";

const TeaPage: NextPage<{ tea: ITeaTypes }> = ({ tea }) => {
  const { isOpen } = useDisclosure();
  return (
    <Fade in={isOpen === false}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Teas - {tea.name}</title>
      </Head>
      <Box minH="auto">
        <Heading>{tea.name}</Heading>
        <Text fontSize="18px">
          Type of the tea: <b>{tea.typeOfTea.name}</b>
        </Text>
      </Box>
    </Fade>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query Teas {
        teas {
          slug
        }
      }
    `,
  });

  const { teas } = data;

  const paths = teas.map((tea: ITeaTypes) => ({
    params: { slug: [tea.slug] },
  }));

  return { paths, fallback: false };
};

type Params = ParsedUrlQuery | undefined;

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params?: Params;
}) => {
  const slug = params?.slug?.[0];

  const { data } = await client.query({
    query: gql`
      query TeasBySlug($slug: String!) {
        teas(where: { slug: $slug }) {
          name
          slug
          description
          country
          city
          harvestDate
          price
          image {
            url
          }
          typeOfTea {
            name
          }
        }
      }
    `,
    variables: { slug },
  });

  const { teas } = data;
  const tea = teas[0];

  return { props: { tea } };
};

export default TeaPage;
