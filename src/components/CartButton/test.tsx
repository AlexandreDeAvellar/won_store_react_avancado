import { CartButton } from '.'
import { render as renderWithTheme, screen } from '../../utils/test-utils'
import { defaultCartItem } from '../../hooks/use-cart'
import { userEvent } from '@storybook/testing-library'

describe('<CartButton />', () => {
  it('should render button to add and call the method if clicked', () => {
    const cartProviderProps = { ...defaultCartItem, addToCart: jest.fn() }
    renderWithTheme(<CartButton id="1" />, { cartProviderProps })

    const button = screen.getByLabelText(/add to cart/i)
    expect(button).toBeInTheDocument()

    userEvent.click(button)
    expect(cartProviderProps.addToCart).toHaveBeenCalledWith('1')
  })

  it('should render button to remove and call the method if clicked', () => {
    const cartProviderProps = { ...defaultCartItem, removeFromCart: jest.fn(), isInCart: () => true }
    renderWithTheme(<CartButton id="1" />, { cartProviderProps })

    const button = screen.getByLabelText(/remove from cart/i)
    expect(button).toBeInTheDocument()

    userEvent.click(button)
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1')
  })
})
