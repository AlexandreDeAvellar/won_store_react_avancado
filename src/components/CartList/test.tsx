import { render as renderWithTheme, screen } from '../../utils/test-utils'

import CartList from '.'
import { cartItems } from '../../hooks/use-cart/use-cart-mock'
import { defaultCartItem } from '../../hooks/use-cart'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(<CartList />, { cartProviderProps: { ...defaultCartItem, items: cartItems, total: 'R$ 38,49' } })

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 38,49')).toHaveStyle({ color: '#F231A5' })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    renderWithTheme(<CartList hasButton />, { cartProviderProps: { ...defaultCartItem, items: cartItems } })

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    renderWithTheme(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
