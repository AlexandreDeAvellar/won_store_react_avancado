import Wishlist, { WishlistTemplateProps } from '.'
import { render as renderWithTheme, screen } from '../../utils/test-utils'
import { gameCardProps } from '../../components/GameCardSlider/game-card-slider-mocks'
import { highlightProps } from '../../components/Highlight/highlight-mocks'

jest.mock('../../templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))
jest.mock('../../components/Showcase', () => ({ __esModule: true, default: jest.fn(() => <div data-testId="Mock Showcase"></div>) }))

const props: WishlistTemplateProps = {
  games: gameCardProps,
  recommendedGames: gameCardProps,
  recommendedHighlight: highlightProps,
  recommendedTitle: 'You may like these games'
}

describe('<Wishlist />', () => {
  it('should render Heading and Showcase correctly', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(screen.getByRole('heading', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
  })
  it('should render empty when there are no games', () => {
    renderWithTheme(<Wishlist {...props} games={[]} />)

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /your wishlist is empty/i })).toBeInTheDocument()
  })
})
