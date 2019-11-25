import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { split, ApolloLink, concat, Operation } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { getMainDefinition } from 'apollo-utilities';
import { withClientState } from 'apollo-link-state';
import StorageProvider from '../storage';

export const IS_DEV_SERVER =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/graphql'
    : 'https://lafu-api.io/graphql';

export const IS_DEV_SOCKET =
  process.env.NODE_ENV === 'development'
    ? 'ws://localhost:5000/subscription'
    : 'ws://lafu-api.io/subscription';

const getToken = () => {
    const storage = StorageProvider.localStorage('lafu');
    const accessToken = storage.get('access_token');
    const refreshToken = storage.get('refresh_token');
    return {
        accessToken,
        refreshToken,
    };
}

const cache = new InMemoryCache().restore((window as any).__APOLLO_STATE__);
const httpLink = new HttpLink({
    credentials: 'include',
    uri: IS_DEV_SERVER,
});

const combinedLinks = split(
    ({ query }) => {
      const { kind, operation }: any = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscriptions';
    },
    httpLink,
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message }) => {
        console.log(`Unexpected error: ${message}`);
      });
    }
    if (networkError) {
      console.log(`Network error: ${networkError}`);
    }
});

const localStateLink = withClientState({
    cache,
    defaults: {
      auth: {
        __typename: 'Auth',
        isLoggedIn: Boolean(
          StorageProvider.localStorage('lafu').get('access_token'),
        ),
      },
    },
    resolvers: {}
  });

const client = new ApolloClient({
    cache,
    link: ApolloLink.from([
        errorLink,
        localStateLink,
        combinedLinks
    ])
});

export default client;