'use client'
import * as React from 'react'
import customTheme from "@/app/theme/theme";
import "./globals.css";
import { NextAuthProvider } from "../../provider";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <NextAuthProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </NextAuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}
