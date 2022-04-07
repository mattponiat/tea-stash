//Chakra-ui
import { Grid } from "@chakra-ui/react";
//Components
import VendorsList from "components-ui/molecules/VendorsList";

const VendorsListContainer = () => {
  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(min(100%, 350px), 1fr))"
      maxW="100%"
      mt="12"
      gap="6"
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
    </Grid>
  );
};

export default VendorsListContainer;
