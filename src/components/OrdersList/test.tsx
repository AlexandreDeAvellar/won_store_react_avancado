import { render as renderWithTheme, screen } from '../../utils/test-utils'

import OrdersList from '.'
import { ordersListProps } from './orders-list-mocks'

jest.mock('../Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Empty" />
  }
}))

jest.mock('../GameItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock GameItem">{children}</div>
  }
}))

describe('<OrdersList />', () => {
  it('should render the game items', () => {
    renderWithTheme(<OrdersList {...ordersListProps} />)

    expect(screen.getByRole('heading', { name: /my orders/i })).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
  })

  it('should render empty state', () => {
    renderWithTheme(<OrdersList />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
