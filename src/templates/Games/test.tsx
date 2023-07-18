import { fireEvent, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { renderWithTheme } from '../../utils/tests/helpers'
import { apolloCache } from '../../utils/apollo/apollo-cache'

import { explorerSidebarItemProps } from '../../components/ExploreSidebar/explorer-sidebar-mocks'
import { mockGames, mockMoreGames, mockNoGames } from './games-mock'

import Games from '.'
import { userEvent } from '@storybook/testing-library'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({ push, query: '', asPath: '', route: '/' }))

jest.mock('../Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<Games />', () => {
  // it('should render loading when starting the template', () => {
  //   renderWithTheme(
  //     <MockedProvider mocks={[]} addTypename={false}>
  //       <Games filterItems={explorerSidebarItemProps} />
  //     </MockedProvider>
  //   )

  //   expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  // })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[mockGames]} addTypename={false}>
        <Games filterItems={explorerSidebarItemProps} />
      </MockedProvider>
    )

    // expect(screen.getByText('Loading...')).toBeInTheDocument()

    expect(await screen.findByText('Price')).toBeInTheDocument()
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()
    expect(await screen.findByRole('button', { name: /show more/i })).toBeInTheDocument()
  })

  it('should render empty when no games found', async () => {
    renderWithTheme(
      <MockedProvider mocks={[mockNoGames]} addTypename={false}>
        <Games filterItems={explorerSidebarItemProps} />
      </MockedProvider>
    )

    expect(await screen.findByText(/We didn't find any games with this filter/i)).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[mockGames, mockMoreGames]} cache={apolloCache}>
        <Games filterItems={explorerSidebarItemProps} />
      </MockedProvider>
    )
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()
    const button = await screen.findByRole('button', { name: /show more/i })
    fireEvent.click(button)
    //
    // expect(await screen.findByText(/More Game/i)).toBeInTheDocument()
  })

  it('should change push router when selecting a filter', async () => {
    renderWithTheme(
      <MockedProvider mocks={[mockGames, mockMoreGames]} cache={apolloCache}>
        <Games filterItems={explorerSidebarItemProps} />
      </MockedProvider>
    )
    userEvent.click(await screen.findByRole('checkbox', { name: /windows/i }))
    userEvent.click(await screen.findByRole('checkbox', { name: /linux/i }))
    userEvent.click(await screen.findByLabelText(/low to high/i))
    expect(push).toHaveBeenCalledWith({
      pathname: '/games',
      query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' }
    })
  })
})
