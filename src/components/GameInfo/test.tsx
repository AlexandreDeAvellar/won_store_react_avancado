import GameInfo, { GameInfoProps } from '.'
import { render as renderWithTheme, screen } from '../../utils/test-utils'

const props: GameInfoProps = {
  id: '1',
  title: 'My game title',
  description: 'Game description',
  price: 'R$210.00'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    renderWithTheme(<GameInfo {...props} />)
    expect(screen.getByRole('heading', { name: /My game title/i })).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
    expect(screen.getByText(props.price)).toBeInTheDocument()
  })

  it('should render game buttons', () => {
    renderWithTheme(<GameInfo {...props} />)
    expect(screen.getByRole('button', { name: 'Add to cart' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Wishlist' })).toBeInTheDocument()
  })
})
