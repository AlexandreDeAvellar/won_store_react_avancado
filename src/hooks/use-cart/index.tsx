import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem } from '../../utils/localStorage'

const CART_KEYS = 'cartItems'

export type CartContextProps = {
  items: string[]
}

export const defaultCartItem: CartContextProps = { items: [] }

export const CartContext = createContext<CartContextProps>(defaultCartItem)

export type CartProviderProps = {
  children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEYS)
    if (data) setCartItems(data)
  }, [])

  const items = cartItems

  return <CartContext.Provider value={{ items }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
