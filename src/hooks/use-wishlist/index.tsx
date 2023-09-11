import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useMutation } from '@apollo/client'

import { GameCardProps } from '../../components/GameCard'
import { useQueryWishlist } from '../../graphql/queries/wishlist'
import { GameCardGraphqlProps, gameCardTransform } from '../../utils/graphql-transform'
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST,
  MutationCreateWishlistProps,
  MutationCreateWishlistVariables,
  MutationUpdateWishlistProps,
  MutationUpdateWishlistVariables
} from '../../graphql/mutations/wishlist'

export type WishlistContextProps = {
  items: GameCardProps[]
  isInWishlist: (id: string) => boolean
  addWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContextDefault: WishlistContextProps = {
  items: [],
  isInWishlist: () => false,
  addWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext<WishlistContextProps>(WishlistContextDefault)

export type WishlistContextProviderProps = { children: React.ReactNode }

export const WishlistProvider = ({ children }: WishlistContextProviderProps) => {
  const { data: session } = useSession()
  const [wishlistItems, setWishlistItems] = useState<GameCardGraphqlProps>()
  const [wishListId, setWishlistId] = useState<string | null>()

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: { identifier: session?.user?.email as string }
  })

  useEffect(() => {
    setWishlistItems(data?.wishlists?.data[0]?.attributes?.games)
    setWishlistId(data?.wishlists?.data[0]?.id)
  }, [data])

  const [createWishlist] = useMutation<MutationCreateWishlistProps, MutationCreateWishlistVariables>(MUTATION_CREATE_WISHLIST, {
    context: { session },
    onCompleted: ({ createWishlist: { data } }) => {
      setWishlistItems(data?.attributes?.games)
      setWishlistId(data?.id)
    }
  })

  const [updateWishlist] = useMutation<MutationUpdateWishlistProps, MutationUpdateWishlistVariables>(MUTATION_UPDATE_WISHLIST, {
    context: { session },
    onCompleted: ({ updateWishlist: { data } }) => {
      setWishlistItems(data?.attributes?.games)
    }
  })

  const isInWishlist = (id: string) => !!wishlistItems?.data.find((game) => game.id === id)

  const wishlistIds: string[] = useMemo(() => wishlistItems?.data.map((game) => game.id), [wishlistItems]) || []

  const addWishlist = (id: string) => {
    if (!session?.user) return
    if (!wishListId) return createWishlist({ variables: { user: session?.user?.id, games: [...wishlistIds, id] } })

    updateWishlist({ variables: { id: wishListId, data: { user: session?.user?.id, games: [...wishlistIds, id] } } })
  }

  const removeFromWishlist = (id: string) => {
    if (!session?.user) return
    const gameId = wishlistIds.filter((gameId) => gameId !== id)
    if (wishListId) return updateWishlist({ variables: { id: wishListId, data: { user: session?.user?.id, games: gameId } } })
  }

  let items: GameCardProps[] = []

  if (!loading && wishlistItems) {
    items = wishlistItems ? gameCardTransform(wishlistItems) : []
  }

  const values = { items, isInWishlist, addWishlist, removeFromWishlist, loading }
  return <WishlistContext.Provider value={values}>{children}</WishlistContext.Provider>
}

export const useWishlist = () => useContext(WishlistContext)
