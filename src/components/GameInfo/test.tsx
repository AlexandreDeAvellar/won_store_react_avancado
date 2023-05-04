import { screen } from '@testing-library/react'
import GameInfo, { GameInfoProps } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

const props: GameInfoProps = {
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
    expect(screen.getByRole('button', { name: 'Add To Cart' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Wishlist' })).toBeInTheDocument()
  })
})
