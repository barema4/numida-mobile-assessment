import { ApolloClient, InMemoryCache } from "@apollo/client";

/**
 * Creates a new Apollo client instance.
 *
 * @param cache - The cache implementation to use for the client.
 * @param uri - The URI of the GraphQL server.
 * @returns A new Apollo client instance.
 */
const client = new ApolloClient({
  uri: "https://numidaserver-latest.onrender.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
