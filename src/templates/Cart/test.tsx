import '../../../.jest/match-media-mock'

import { render as renderWithTheme, screen } from '../../utils/test-utils'

import { gameCardProps } from '../../components/GameCardSlider/game-card-slider-mocks'
import { highlightProps } from '../../components/Highlight/highlight-mocks'

import Cart, { CartProps } from '.'

const props: CartProps = {
  recommendedHighlight: highlightProps,
  recommendedGames: gameCardProps,
  recommendedTitle: 'You may like these games'
}

jest.mock('../Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('../../components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

jest.mock('../../components/CartList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Cart" />
  }
}))

jest.mock('../../components/PaymentForm', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock PaymentForm" />
  }
}))

jest.mock('../../components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

describe('<Cart />', () => {
  it('should render sections', () => {
    renderWithTheme(<Cart {...props} />)

    expect(screen.getByRole('heading', { name: /my cart/i })).toBeInTheDocument()
    expect(screen.getByTestId('Mock Cart')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentForm')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
  })
})
