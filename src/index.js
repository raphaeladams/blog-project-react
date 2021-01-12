import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@shopify/polaris/dist/styles.css';
import {AppProvider} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

import App from './App';
import reportWebVitals from './reportWebVitals';

// import ApolloClient from 'apollo-boost';
// import {ApolloProvider} from '@apollo/react-hooks';

// import {InMemoryCache} from 'apollo-cache-inmemory';

import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://sample-app.myshopify.io/graphql',
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
