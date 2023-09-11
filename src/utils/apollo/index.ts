import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useMemo } from 'react'
import { apolloCache } from './apollo-cache'
import { Session } from 'next-auth'

let apolloClient: ApolloClient<NormalizedCacheObject> | null

const createApolloClient = (session?: Session | null) => {
  // https://www.apollographql.com/docs/react/networking/authentication/

  const httpLink = new HttpLink({ uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql` })
  const authLink = setContext((_, { headers, session: clientSession }) => {
    const jwt = session?.jwt || clientSession?.jwt || ''
    const authorization = jwt ? `Bearer ${session?.jwt}` : ''
    return {
      headers: { ...headers, authorization }
    }
  })
  return new ApolloClient({
    link: authLink.concat(httpLink),
    ssrMode: typeof window === 'undefined',
    cache: apolloCache
  })
}

export const initializeApollo = (initialState = null, session?: Session | null) => {
  // serve para verificar se já existe uma instância, para não criar outra
  const apoloClientGlobal = apolloClient ?? createApolloClient(session)

  // se a página usar o apolloClient no lado client
  // hidratamos o estado inicial aqui
  if (initialState) {
    apoloClientGlobal.cache.restore(initialState)
  }

  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apoloClientGlobal

  // cria o apolloClient se estiver no client side
  apolloClient = apolloClient ?? apoloClientGlobal

  return apolloClient
}

export const useApollo = (initialState = null, session?: Session | null) => {
  const store = useMemo(() => initializeApollo(initialState, session), [initialState, session])
  return store
}
