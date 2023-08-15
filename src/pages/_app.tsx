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
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Head>
            <title>Won Games</title>
            <meta name="description" content="The best Game Store in the world!" />
          </Head>
          <Component {...pageProps} />
        </CartProvider>
        <GlobalStyles />
      </ThemeProvider>
    </ApolloProvider>
  )
}
