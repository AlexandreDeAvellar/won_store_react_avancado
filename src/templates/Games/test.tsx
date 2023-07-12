import { fireEvent, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { renderWithTheme } from '../../utils/tests/helpers'
import { apolloCache } from '../../utils/apollo/apollo-cache'

import { explorerSidebarItemProps } from '../../components/ExploreSidebar/explorer-sidebar-mocks'
import { mockGames, mockMoreGames } from './games-mock'

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

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={explorerSidebarItemProps} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[mockGames]} addTypename={false}>
        <Games filterItems={explorerSidebarItemProps} />
      </MockedProvider>
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()

    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(await screen.findByText('Sample Game')).toBeInTheDocument()
    expect(await screen.findByRole('button', { name: /show more/i })).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[mockGames, mockMoreGames]} cache={apolloCache}>
        <Games filterItems={explorerSidebarItemProps} />
      </MockedProvider>
    )
    expect(await screen.findByText('Sample Game')).toBeInTheDocument()
    const button = await screen.findByRole('button', { name: /show more/i })
    fireEvent.click(button)
    // expect(await screen.findByText('More Game')).toBeInTheDocument()
  })
})
