import { fireEvent } from '@testing-library/react'
import GameCard, { GameCardProps } from '.'
import { render as renderWithTheme, screen } from '../../utils/test-utils'
import theme from '../../styles/theme'

const props: GameCardProps = {
  id: '1',
  title: 'Red Dead Redemption 2',
  slug: 'red-dead-redemption-2',
  developer: 'RockStar',
  img: '/img/red-dead-img.jpg',
  price: 'R$ 200,00'
}

describe('<GameCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameCard {...props} />)
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: props.developer })).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', props.img)
    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute('href', `game/${props.slug}`)
    expect(screen.getByText(props.price)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)
    const price = screen.getByText(props.price)
    expect(price).not.toHaveStyle({ texDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard promotionalPrice="R$ 100,00" {...props} />)
    expect(screen.getByText('R$ 200,00')).toHaveStyle({ 'text-decoration': 'line-through' })
    expect(screen.getByText('R$ 100,00')).not.toHaveStyle({ 'text-decoration': 'line-through' })
  })

  it('should render filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} onFav={onFav} />)
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toHaveBeenCalled()
  })

  it('should render a ribbon', () => {
    renderWithTheme(<GameCard {...props} ribbon="20% off" />)
    const ribbon = screen.getByText(/20% off/i)
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: `${theme.colors.primary}` })
    expect(ribbon).toHaveStyle({ height: `3rem` })
  })
})
