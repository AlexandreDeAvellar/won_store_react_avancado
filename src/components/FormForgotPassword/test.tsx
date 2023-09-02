import '../../../.jest/server.mock'
import { render as renderWithTheme, screen } from '../../utils/test-utils'

import FormSignIn from '.'
import { userEvent } from '@storybook/testing-library'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const router = jest.spyOn(require('next/router'), 'useRouter')
const query = {}
router.mockImplementation(() => ({ query }))

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send email/i })).toBeInTheDocument()
  })

  it('should validate the email', async () => {
    renderWithTheme(<FormSignIn />)

    userEvent.type(screen.getByPlaceholderText(/email/i), 'valid@email.com')
    // userEvent.click(screen.getByRole('button', { name: /send email/i }))

    // expect(screen.getByText(/asd/i)).toBeInTheDocument()
  })
})
