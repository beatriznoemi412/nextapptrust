

"use client"
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
    <html lang="en">
      <body>
        <ChakraProvider theme={customTheme}>
         <QueryClientProvider client={queryClient}>
            <NextAuthProvider>{children}</NextAuthProvider>
           <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}