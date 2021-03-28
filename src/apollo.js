import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://pacific-coast-68450.herokuapp.com/",
  cache: new InMemoryCache(),
});

export default client;
