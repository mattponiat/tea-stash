import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
//Apollo client
import { gql } from "@apollo/client";
import client from "apolloClient";
//Chakra-ui
import { Box, Heading, Text } from "@chakra-ui/react";

export interface TeaTypes {
  name: string;
  slug: string;
  description: string;
  country: string;
  city: string;
  harvestDate?: string;
  price: number;
  coverImage: string;
  typeOfTea: {
    name: string;
  };
}

const TeaPage = ({ tea }: { tea: TeaTypes }) => {
  return (
    <Box>
      <Heading>{tea.name}</Heading>
      <Text fontSize="18px">
        Type of the tea: <b>{tea.typeOfTea.name}</b>
      </Text>
    </Box>
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

  const paths = teas.map((tea: any) => ({
    params: { slug: [tea.slug] },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const slug = params.slug[0] as string;

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
          coverImage
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
