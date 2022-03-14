import type { AppProps } from "next/app";
//Fonts
import "@fontsource/nunito";
//Custom theme
import { theme } from "theme";
//Global styles
import { GlobalStyles } from "GlobalStyles";
import { Global } from "@emotion/react";
//Chakra-ui
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
//Components
import Layout from "components-ui/organisms/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
