import { Box } from "@chakra-ui/react";

const Desc = ({ markdown }: { markdown: JSX.Element }) => {
  return (
    <Box maxW="100%" lineHeight="1.6" fontSize="2xl">
      {markdown}
    </Box>
  );
};

export default Desc;
