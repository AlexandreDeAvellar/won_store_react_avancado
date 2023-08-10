import '../../../.jest/match-media-mock'

import Showcase, { ShowCaseProps } from '.'
import { render as renderWithTheme, screen } from '../../utils/test-utils'
import { highlightProps } from '../Highlight/highlight-mocks'
import { gameCardProps } from '../GameCardSlider/game-card-slider-mocks'

const props: ShowCaseProps = { title: 'Most Popular', highlight: highlightProps, game: gameCardProps }

describe('<Showcase />', () => {
  it('should render full showcase', () => {
    renderWithTheme(<Showcase {...props} />)
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: props.highlight?.title })).toBeInTheDocument()
    expect(screen.getAllByText('Population Zero')).toHaveLength(4)
  })

  it('should render without title', () => {
    renderWithTheme(<Showcase game={gameCardProps} highlight={highlightProps} />)
    expect(screen.queryByRole('heading', { name: props.title })).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: props.highlight?.title })).toBeInTheDocument()
    expect(screen.getAllByText('Population Zero')).toHaveLength(4)
  })

  it('should render without highlight', () => {
    renderWithTheme(<Showcase title="Most Popular" game={gameCardProps} />)
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: props.highlight?.title })).not.toBeInTheDocument()
    expect(screen.getAllByText('Population Zero')).toHaveLength(4)
  })

  it('should render without games', () => {
    renderWithTheme(<Showcase title="Most Popular" highlight={highlightProps} />)
    expect(screen.getByRole('heading', { name: props.title })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: props.highlight?.title })).toBeInTheDocument()
    expect(screen.queryByRole('Population Zero')).not.toBeInTheDocument()
  })
})
