import type { AppProps } from "next/app";
//Fonts
import "@fontsource/nunito";
//Custom theme
import { customTheme } from "customTheme";
//Chakra-ui
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
//Components
import Layout from "components/organisms/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
