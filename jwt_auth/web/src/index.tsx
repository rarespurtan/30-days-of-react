/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./Routes";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getAccessToken } from "./pages/accessToken";
const httpLink = createHttpLink({ uri: "/graphql" });
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getAccessToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
