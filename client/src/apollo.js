import { ApolloClient, InMemoryCache } from "@apollo/client";

import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { YogaLink } from "@graphql-yoga/apollo-link";



const wsLink = new WebSocketLink(
  new SubscriptionClient("ws://localhost:8080/v1/graphql", {
  }),
);

const httpLink = new HttpLink({
  uri: "http://localhost:8080/v1/graphql",
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});



// const client = new ApolloClient({
//   link: new YogaLink({
//     endpoint: 'http://localhost:8080/v1/graphql',
    
//     // headers:{
//     //   "x-hasura-access-key":"12345"
//     // }
//   }),
//   cache: new InMemoryCache(),
// })



export default client;