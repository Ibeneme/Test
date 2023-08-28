"use client";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "./Provider/ThemeProvider";
import createApolloClient from "./Instance/ApolloClientInstance";
import { PUBKEY } from "./Constants/constant";
import { Index } from "./Components/Index";

export default function Home() {
  const client = createApolloClient();

  return (
    <ThemeProvider>
      <ApolloProvider client={client}>
        <Index pubkey={PUBKEY} />
      </ApolloProvider>
    </ThemeProvider>
  );
}
