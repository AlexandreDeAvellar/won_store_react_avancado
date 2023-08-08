import { createContext, useContext, useEffect, useState } from 'react'
import { useQueryGames } from '../../graphql/queries/games'

import { getStorageItem } from '../../utils/localStorage'
import { currencyFormat } from '../../utils/format'
import { cartTransform } from '../../utils/graphql-transform'

const CART_KEYS = 'cartItems'

export type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContextProps = {
  items: CartItem[]
  quantity: number
  total: string
}

export const defaultCartItem: CartContextProps = { items: [], quantity: 0, total: '$0.00' }

export const CartContext = createContext<CartContextProps>(defaultCartItem)

export type CartProviderProps = {
  children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const idGames = getStorageItem(CART_KEYS)
    if (idGames) setCartItems(idGames)
  }, [])

  const { data } = useQueryGames({
    limit: 1000,
    start: 0,
    filters: { where: { id: { in: cartItems } } }
  })

  const items = cartTransform(data?.games)
  const quantity = cartItems.length
  const total = data?.games?.data?.reduce((acc: number, game: { attributes: { price: number } }) => {
    return acc + game.attributes.price
  }, 0)

  return <CartContext.Provider value={{ items, quantity, total: currencyFormat(total || 0) }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
