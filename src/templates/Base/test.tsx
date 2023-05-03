import { screen } from '@testing-library/react'
import Base from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

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
