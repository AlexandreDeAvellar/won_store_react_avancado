import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject> | null

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({ uri: 'http://127.0.0.1:1337/graphql' }),
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined'
  })
}

export const initializeApollo = (initialState = {}) => {
  // serve para verificar se já existe uma instância, para não criar outra
  const apoloClientGlobal = apolloClient ?? createApolloClient()

  // se a página usar o apolloClient no lado client
  // hidratamos o estado inicial aqui
  if (initialState) apoloClientGlobal.cache.restore(initialState)

  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apoloClientGlobal

  // cria o apolloClient se estiver no client side
  apolloClient = apolloClient ?? apoloClientGlobal

  return apolloClient
}

export const useApollo = (initialState = {}) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
