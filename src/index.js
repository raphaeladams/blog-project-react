import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@shopify/polaris/dist/styles.css';
import {AppProvider} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

import App from './App';
import reportWebVitals from './reportWebVitals';

import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';


const link = createHttpLink({
  uri: 'https://sample-app.myshopify.io/graphql'
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <AppProvider i18n={enTranslations}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
