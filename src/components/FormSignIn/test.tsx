import FormSignIn from '.'
import { render as renderWithTheme, screen } from '../../utils/test-utils'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignIn />)
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Sign in now/i })).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)
    expect(screen.getByRole('link', { name: /Forgot your password?/i })).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)
    expect(screen.getByText(/Don’t have an account?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sign up?/i })).toBeInTheDocument()
  })
})
