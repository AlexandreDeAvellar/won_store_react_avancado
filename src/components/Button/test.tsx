import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { addShoppingCart } from '../icons'
import Button from '.'

describe('<Button />', () => {
  it('should render medium button by default', () => {
    renderWithTheme(<Button>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem',
      padding: '0.8rem 3.2rem'
    })
  })

  it('should render small size button', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render large size button', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.0rem'
    })
  })

  it('should render a full width version', () => {
    renderWithTheme(<Button fullWidth>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(<Button icon={addShoppingCart}>Buy Now</Button>)
    const icon = screen.queryByRole('button')?.querySelector('svg')
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
})
