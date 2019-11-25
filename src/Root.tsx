import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './App';
import configureStore from './store/configureStore';
import client from './lib/apollo/client';

const preloadedState =
  typeof window === 'undefined' ? undefined : (window as any).__REDUX_STATE__;
const store = configureStore(preloadedState);

const Root = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
);

export default Root;
