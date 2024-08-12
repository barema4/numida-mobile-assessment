import { ApolloClient, InMemoryCache } from "@apollo/client";

/**
 * Creates a new Apollo client instance.
 *
 * @param cache - The cache implementation to use for the client.
 * @param uri - The URI of the GraphQL server.
 * @returns A new Apollo client instance.
 */
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://192.168.1.2:8000/graphql",
});

export default client;
