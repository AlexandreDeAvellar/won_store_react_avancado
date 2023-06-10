import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

import Head from 'next/head'

import theme from '../styles/theme'
import GlobalStyles from 'styles/global'
import { useApollo } from '../utils/apollo'
import 'styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Won Games</title>
          <meta name="description" content="The best Game Store in the world!" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
