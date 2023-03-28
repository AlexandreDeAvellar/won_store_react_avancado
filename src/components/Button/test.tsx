import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { addShoppingCartIcon } from '../icons'
import Button from '.'

describe('<Button />', () => {
  it('should render medium button by default', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      'font-size': '0.8rem',
      padding: '0.4rem 1.6rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render small size button', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '0.6rem'
    })
  })

  it('should render large size button', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1rem',
      padding: '0.4rem 2.0rem'
    })
  })

  it('should render a full width version', () => {
    renderWithTheme(<Button fullWidth>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(<Button icon={addShoppingCartIcon}>Buy Now</Button>)
    const icon = screen.queryByRole('button')?.querySelector('svg')
    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
})
