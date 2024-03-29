import { render as renderWithTheme, screen } from '../../utils/test-utils'
import { addShoppingCartIcon } from '../icons'
import Button from '.'
import theme from '../../styles/theme'

describe('<Button />', () => {
  it('should render medium button by default', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '2.7rem',
      'font-size': '0.8rem',
      padding: '0.4rem 2.0rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render small size button', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '2rem',
      'font-size': '0.6rem'
    })
  })

  it('should render large size button', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>)
    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3.7rem',
      'font-size': '1rem',
      padding: '0.4rem 2.8rem'
    })
  })

  it('should render a disabled Button', () => {
    renderWithTheme(<Button disabled>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled'
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

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute('href', '/link')
  })

  it('should render Button minimal version', () => {
    renderWithTheme(
      <Button minimal as="a" href="/link">
        Buy now
      </Button>
    )
    const button = screen.getByRole('link', { name: /buy now/i })

    expect(button).toHaveStyle({
      background: 'none',
      color: `${theme.colors.primary}`
    })
    expect(button).toHaveStyleRule('background', 'none', { modifier: ':hover' })
  })
})
