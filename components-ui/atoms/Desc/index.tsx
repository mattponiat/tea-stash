import { Box } from "@chakra-ui/react";

const Desc = ({ markdown }: { markdown: JSX.Element }) => {
  return (
    <Box w="95%" minW="250px" lineHeight="1.6" fontSize="1.5rem" p="1">
      {markdown}
    </Box>
  );
};

export default Desc;
