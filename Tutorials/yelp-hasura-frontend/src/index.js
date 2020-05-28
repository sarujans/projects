import React from 'react';
import {render } from 'react-dom';
import {ApolloProvider,ApolloClient,HttpLink,InMemoryCache} from '@apollo/client'

import Planets from "./components/Planets";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:'https://yelp-hasura-clone.herokuapp.com/v1/graphql'
  })
});

console.log(client)

const App = () => (
  <ApolloProvider client={client}>
      <Planets></Planets>
  </ApolloProvider>
);

render(<App/>, document.getElementById('root'))