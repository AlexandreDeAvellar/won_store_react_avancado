import { galleryProps } from '../../components/Gallery/gallery-mocks'
import { gameInfoProps } from '../../components/GameInfo/game-info-mocks'
import { gameDetailsProps } from '../../components/GameDetails/game-details-mocks'
import { gameCardProps } from '../../components/GameCardSlider/game-card-slider-mocks'
import { highlightProps } from '../../components/Highlight/highlight-mocks'

import Game, { GameTemplateProps } from '.'
import { render as renderWithTheme, screen } from '../../utils/test-utils'

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoProps,
  gallery: galleryProps,
  description: `<h1>Custom HTML</h1>`,
  details: gameDetailsProps,
  upcomingGames: gameCardProps,
  upcomingHighlight: highlightProps,
  recommendedGames: gameCardProps,
  recommendedTitle: 'You may like these games'
}

jest.mock('../../components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock('../../components/Gallery', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Gallery" />
  }
}))

jest.mock('../../components/GameDetails', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameDetails" />
  }
}))

jest.mock('../../components/GameInfo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameInfo" />
  }
}))

jest.mock('../../components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Game />', () => {
  it('should render the template with components', () => {
    renderWithTheme(<Game {...props} />)
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
    expect(screen.getByText(/custom html/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no images', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
  })

  it('should render the cover image', () => {
    renderWithTheme(<Game {...props} />)
    const cover = screen.getByLabelText(/cover/i)

    expect(cover).toHaveStyle({
      backgroundImage: 'url(bg-image.jpg)',
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('clip-path', 'polygon(0 0,100% 0,100% 100%,0 85%)', {
      media: '(min-width: 768px)'
    })
  })
})
