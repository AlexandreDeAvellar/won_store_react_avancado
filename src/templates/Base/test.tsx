import Base from '.'
import { render as renderWithTheme, screen } from '../../utils/test-utils'

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => {
    return { data: null }
  })
}))

jest.mock('../../components/Menu', () => ({ __esModule: true, default: jest.fn(() => <div data-testId="Mock Menu"></div>) }))
jest.mock('../../components/Footer', () => ({ __esModule: true, default: jest.fn(() => <div data-testId="Mock Footer"></div>) }))

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    renderWithTheme(
      <Base>
        <h1>children</h1>
      </Base>
    )
    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'children' })).toBeInTheDocument()
  })
})
