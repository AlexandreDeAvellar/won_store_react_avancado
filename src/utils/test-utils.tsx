import { ReactNode } from 'react'

import { CartContext, CartContextProps, defaultCartItem } from '../hooks/use-cart'
import { WishlistContextProps, WishlistContextDefault, WishlistContext } from '../hooks/use-wishlist'
import { RenderOptions, render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

export type CustomRenderProps = {
  cartProviderProps?: CartContextProps
  wishlistProviderProps?: WishlistContextProps
} & Omit<RenderOptions, 'queries'>

export const customRender = (
  ui: ReactNode,
  { cartProviderProps = defaultCartItem, wishlistProviderProps = WishlistContextDefault, ...renderOptions }: CustomRenderProps = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProviderProps}>
        <WishlistContext.Provider value={wishlistProviderProps}>{ui}</WishlistContext.Provider>
      </CartContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
