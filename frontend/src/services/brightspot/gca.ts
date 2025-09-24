import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

const clientId = import.meta.env.VITE_GRAPHQL_CLIENT_ID;
const clientSecret = import.meta.env.VITE_GRAPHQL_CLIENT_SECRET;

// Create Brightspot-specific Apollo client with debug capabilities
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
});

const links: ApolloLink[] = [];

// Add auth link for Brightspot authentication using modern ApolloLink approach
const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'X-Client-ID': clientId,
      'X-Client-Secret': clientSecret,
    }
  }));
  return forward(operation);
});

links.push(authLink);
links.push(httpLink);

export default new ApolloClient({
  link: ApolloLink.from(links),
  cache: new InMemoryCache({
    dataIdFromObject: () => Math.random().toString()
  }),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-and-network'
    },
    query: {
      errorPolicy: 'all',
      fetchPolicy: 'network-only'
    }
  }
});
