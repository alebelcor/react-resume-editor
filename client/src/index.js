import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './components/App.jsx';

import './styles/index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4466'
});

render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,

  document.getElementById('root')
);
