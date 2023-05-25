import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { gameCardProps } from '../../components/GameCardSlider/game-card-slider-mocks'
import { explorerSidebarItemProps } from '../../components/ExploreSidebar/explorer-sidebar-mocks'

import Games from '.'

jest.mock('../Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('../../components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

jest.mock('../../components/GameCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameCard" />
  }
}))

describe('<Games />', () => {
  it('should render sections', () => {
    renderWithTheme(<Games filterItems={explorerSidebarItemProps} games={[gameCardProps[0]]} />)

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /show more/i })).toBeInTheDocument()
  })
})
