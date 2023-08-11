import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'
import { CartContext, defaultCartItem } from '../src/hooks/use-cart'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={{
        ...defaultCartItem,
        ...( context?.args?.cartContextValue || {}),
        ...context.args
      }}>
        <GlobalStyles />
        {Story()}
      </CartContext.Provider>
    </ThemeProvider>
  )
]
