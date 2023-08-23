import NextNProgress from 'nextjs-progressbar'

import { SessionProvider } from 'next-auth/react'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import theme from '../styles/theme'
import GlobalStyles from 'styles/global'
import { useApollo } from '../utils/apollo'
import 'styles/globals.css'
import { CartProvider } from '../hooks/use-cart'

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Head>
              <title>Won Games</title>
              <meta name="description" content="The best Game Store in the world!" />
            </Head>
            <NextNProgress color="#F231A5" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
            <Component {...pageProps} />
          </CartProvider>
          <GlobalStyles />
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  )
}
