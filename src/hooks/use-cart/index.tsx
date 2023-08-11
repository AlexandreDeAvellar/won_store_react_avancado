import { createContext, useContext, useEffect, useState } from 'react'
import { useQueryGames } from '../../graphql/queries/games'

import { getStorageItem } from '../../utils/localStorage'
import { currencyFormat } from '../../utils/format'
import { CartItem, cartTransform } from '../../utils/graphql-transform'

const CART_KEYS = 'cartItems'

export type CartContextProps = {
  items: CartItem[]
  quantity: number
  total: string
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  loading: boolean
}

export const defaultCartItem: CartContextProps = {
  items: [],
  quantity: 0,
  total: '$0.00',
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false
}

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

  const { data, loading } = useQueryGames({
    limit: 1000,
    start: 0,
    filters: { where: { id: { in: cartItems } } }
  })

  const items = cartTransform(data?.games)
  const quantity = cartItems.length
  const total = data?.games?.data?.reduce((acc: number, game: { attributes: { price: number } }) => {
    return acc + game.attributes.price
  }, 0)

  const isInCart = (id: string) => (id ? cartItems.includes(id) : false)

  const addToCart = (id: string) => {
    !cartItems.includes(id) && setCartItems([...cartItems, id])
  }

  const removeFromCart = (id: string) => {
    const newCartItems = cartItems.filter((item_id) => item_id !== id)
    setCartItems(newCartItems)
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider value={{ items, quantity, total: currencyFormat(total || 0), isInCart, addToCart, removeFromCart, clearCart, loading }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
