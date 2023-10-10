import userEvent from '@testing-library/user-event'
import { render as renderWithTheme, screen } from '../../utils/test-utils'

import UserDropdown from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const routerSpy = jest.spyOn(require('next/router'), 'useRouter')
routerSpy.mockImplementation(() => ({ query: {} }))

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    renderWithTheme(<UserDropdown username="Willian" />)

    expect(screen.getByText(/willian/i)).toBeInTheDocument()
  })

  it('should render the menu', async () => {
    renderWithTheme(<UserDropdown username="Willian" />)

    // open menu
    await userEvent.click(screen.getByText(/willian/i))

    expect(screen.getByRole('link', { name: /my profile/i })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign out/i })).toBeInTheDocument()
  })
})
