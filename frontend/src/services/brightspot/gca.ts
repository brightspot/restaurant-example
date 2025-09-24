import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { map } from 'rxjs/operators';
import { debugStore } from './debug';
import { config } from '../../config/env';

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

// Add Brightspot debug link in development mode
if (config.isDevelopment) {
  const brightspotDebugLink = new ApolloLink((operation, forward) => {
    const startTime = Date.now();

    // Add Brightspot-specific debug header if debug is enabled
    const debugState = debugStore.getCurrentState();
    if (debugState.enabled) {
      operation.setContext(({ headers = {} }) => ({
        headers: {
          ...headers,
          'x-debug': 'true'
        }
      }));
    }

    const observable = forward(operation);

    return observable.pipe(
      map((response: any) => {
        const duration = Date.now() - startTime;

        // Capture Brightspot profiler data if present and debug is enabled
        if (debugState.enabled && response.extensions?.profilerResult) {
          debugStore.addDebugResult(
            operation.operationName || null,
            operation.query.loc?.source.body || '',
            response.extensions.profilerResult,
            operation.variables,
            duration
          );
        }

        return response;
      })
    );
  });

  links.push(brightspotDebugLink);
}

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
