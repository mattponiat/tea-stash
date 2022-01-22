import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/ckyp0yqas008y01w8gu4rf1k4/master",
  cache: new InMemoryCache(),
});

export default Client;
