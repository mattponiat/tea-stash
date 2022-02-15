import { Box } from "@chakra-ui/react";

const Desc = ({ markdown }: { markdown: JSX.Element }) => {
  return (
    <Box w="95%" minW="250px" fontSize="1.5rem">
      {markdown}
    </Box>
  );
};

export default Desc;
