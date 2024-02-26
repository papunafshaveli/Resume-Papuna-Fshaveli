import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const VITE_MY_GITHUB_ACCESS_TOKEN = "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";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: VITE_MY_GITHUB_ACCESS_TOKEN
        ? `Bearer ${VITE_MY_GITHUB_ACCESS_TOKEN}`
        : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
