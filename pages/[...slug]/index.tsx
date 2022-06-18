import Head from "next/head";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
//MDX
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
//Apollo client
import { gql } from "@apollo/client";
import client from "apolloClient";
//Chakra-ui
import { Fade, useDisclosure } from "@chakra-ui/react";
//Types
import { ITeaTypes, TeasProps } from "types";
import { ParsedUrlQuery } from "querystring";
//Components
import TeaInfoPage from "components-ui/organisms/TeaInfoPage";

const TeaPage: NextPage<{
  tea: ITeaTypes;
  source: { compiledSource: string };
}> = ({ tea, source }) => {
  const { isOpen } = useDisclosure();

  return (
    <Fade in={isOpen === false}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Teas - {tea.name}</title>
      </Head>
      <TeaInfoPage teas={tea} markdown={<MDXRemote {...source} />} />
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
          country {
            name
          }
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

  const { teas }: TeasProps = data;
  const tea = teas[0];

  const source = await serialize(tea.description);

  return { props: { tea, source } };
};

export default TeaPage;
