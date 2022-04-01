//Chakra-ui
import { Flex } from "@chakra-ui/react";
//Components
import VendorsList from "components-ui/molecules/VendorsList";

const VendorsListContainer = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      gap="6"
      maxW="100%"
      w="100%"
      mt="12"
    >
      <VendorsList
        logo="/images/eherbata-logo.png"
        name="eherbata.pl"
        href="https://eherbata.pl/"
      />
      <VendorsList
        logo="/images/meileaf-logo.jpg"
        name="Mei Leaf"
        href="https://meileaf.com/"
      />
      <VendorsList
        logo="/images/theteamakers-logo.jpg"
        name="The Tea Makers"
        href="https://www.theteamakers.co.uk/"
      />
    </Flex>
  );
};

export default VendorsListContainer;
