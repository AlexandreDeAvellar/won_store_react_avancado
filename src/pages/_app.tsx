import NextNProgress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

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
import { WishlistProvider } from '../hooks/use-wishlist'

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <WishlistProvider>
              <Head>
                <title>Won Games</title>
                <meta name="description" content="The best Game Store in the world!" />
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
              </Head>
              <DefaultSeo {...SEO} />
              <NextNProgress color="#F231A5" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
              <Component {...pageProps} />
            </WishlistProvider>
          </CartProvider>
          <GlobalStyles />
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  )
}
