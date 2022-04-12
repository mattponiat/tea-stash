import { Box } from "@chakra-ui/react";

const Desc = ({ markdown }: { markdown: JSX.Element }) => {
  return (
    <Box maxW="100%" fontSize="2xl" textAlign="justify">
      {markdown}
    </Box>
  );
};

export default Desc;
