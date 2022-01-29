import * as React from "react";
import { GetStaticProps } from "next";
//Chakra-ui
import { Box } from "@chakra-ui/react";
//Apollo client
import client from "apolloClient";
import { gql } from "@apollo/client";
//Components
import Label from "components-ui/atoms/Label";
//Interface
import { ITeaTypes } from "types";

const TeaCard = ({ tea }: { tea: ITeaTypes }) => {
  return (
    <Box>
      <Label>{tea.name}</Label>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Teas {
        teas {
          name
        }
      }
    `,
  });

  const { tea } = data;
  return { props: tea };
};

export default TeaCard;
