import { ReactNode } from 'react'

import { CartContext, CartContextProps, defaultCartItem } from '../hooks/use-cart'
import { RenderOptions, render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

export type CustomRenderProps = {
  cartProviderProps?: CartContextProps
} & Omit<RenderOptions, 'queries'>

export const customRender = (ui: ReactNode, { cartProviderProps = defaultCartItem, ...renderOptions }: CustomRenderProps = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProviderProps}>{ui}</CartContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
