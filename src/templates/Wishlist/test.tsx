import { screen } from '@testing-library/react'
import Wishlist, { WishlistTemplateProps } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'
import { gameCardProps } from '../../components/GameCardSlider/game-card-slider-mocks'
import { highlightProps } from '../../components/Highlight/highlight-mocks'

jest.mock('../../components/Showcase', () => ({ __esModule: true, default: jest.fn(() => <div data-testId="Mock Showcase"></div>) }))

const props: WishlistTemplateProps = {
  games: gameCardProps,
  recommendedGames: gameCardProps,
  recommendedHighlight: highlightProps
}

describe('<Wishlist />', () => {
  it('should render Heading and Showcase correctly', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(screen.getByRole('heading', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
  })
})
