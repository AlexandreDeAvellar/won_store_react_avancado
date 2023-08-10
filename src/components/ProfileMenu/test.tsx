import ProfileMenu from '.'
import { render as renderWithTheme, screen } from '../../utils/test-utils'
import theme from '../../styles/theme'

describe('<ProfileMenu />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ProfileMenu />)
    expect(screen.getByRole('link', { name: /my profile/i })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })

  it('should render the menu with an active link defined', () => {
    renderWithTheme(<ProfileMenu activeLink="/profile/cards" />)
    const link = screen.getByRole('link', { name: 'My cards' }).children[0]

    expect(link).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
