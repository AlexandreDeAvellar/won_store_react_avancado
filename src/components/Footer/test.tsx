import Footer from '.'
import { render as renderWithTheme, screen } from '../../utils/test-utils'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    const { container } = renderWithTheme(<Footer />)
    expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /follow us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /location/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
