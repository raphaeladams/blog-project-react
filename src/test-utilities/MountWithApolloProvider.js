import React from 'react';
import { PolarisTestProvider } from '@shopify/polaris';
import en from '@shopify/polaris/locales/en.json';
import { createMount } from '@shopify/react-testing';
import fetch from 'unfetch';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AppProvider } from '@shopify/polaris';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const link = createHttpLink({
  uri: 'https://sample-app.myshopify.io/graphql',
  fetch: fetch
})

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})

export const mountWithApolloProvider = createMount({
  context(options) {
    return options;
  },
  render(element, context) {
    return (
      <ApolloProvider client={client}>
        <PolarisTestProvider i18n={en} {...context}>
          {element}
        </PolarisTestProvider>
      </ApolloProvider>
    );
  }
});