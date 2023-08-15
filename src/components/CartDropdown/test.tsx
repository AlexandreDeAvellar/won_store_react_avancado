import { render as renderWithTheme, screen } from '../../utils/test-utils'

import CartDropdown from '.'
import { defaultCartItem } from '../../hooks/use-cart'
import { cartItems } from '../../hooks/use-cart/use-cart-mock'

const items = cartItems

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    renderWithTheme(<CartDropdown />, { cartProviderProps: { ...defaultCartItem, items, total: 'R$ 300,00', quantity: 2 } })

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown />, { cartProviderProps: { ...defaultCartItem, items, total: 'R$ 300,00' } })

    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
