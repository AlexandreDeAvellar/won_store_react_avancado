import { screen } from '@testing-library/react'

import GameDetails, { GameDetailsProps } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  publisher: 'Walktrough',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative']
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('heading', { name: /developer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /release date/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /platforms/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /publisher/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('should render platform icons', () => {
    renderWithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/windows/i)).toBeInTheDocument()
    expect(screen.getByText(/linux/i)).toBeInTheDocument()
    expect(screen.getByText(/mac/i)).toBeInTheDocument()
  })

  it('should render free rating when BR0', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render the developer', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText(props.developer)).toBeInTheDocument()
  })

  it('should render the publisher', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText(props.publisher)).toBeInTheDocument()
  })

  it('should render 18+ rating when BR18', () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />)
    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    renderWithTheme(<GameDetails {...props} />)
    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
  })
})
