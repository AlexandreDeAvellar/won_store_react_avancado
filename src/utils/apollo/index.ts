import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'
import { apolloCache } from './apollo-cache'

let apolloClient: ApolloClient<NormalizedCacheObject> | null

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({ uri: 'http://127.0.0.1:1337/graphql' }),
    ssrMode: typeof window === 'undefined',
    cache: apolloCache
  })
}

export const initializeApollo = (initialState = null) => {
  // serve para verificar se já existe uma instância, para não criar outra
  const apoloClientGlobal = apolloClient ?? createApolloClient()

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

export const useApollo = (initialState = null) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
