import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render as renderWithTheme, screen } from '../../utils/test-utils'
import { css } from 'styled-components'

import ExploreSidebar from '.'
import { Overlay } from './styles'

import { explorerSidebarItemProps } from './explorer-sidebar-mocks'
const items = explorerSidebarItemProps

describe('<ExploreSidebar />', () => {
  it('should render headings', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /sort by/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /platforms/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('checkbox', { name: /under \$50/i })).toBeInTheDocument()

    expect(screen.getByRole('radio', { name: /low to high/i })).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} initialValues={{ platforms: ['windows'], sort_by: 'low-to-high' }} />)

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should filter with initial values', async () => {
    const onFilter = jest.fn()
    renderWithTheme(<ExploreSidebar items={items} initialValues={{ platforms: ['windows'], sort_by: 'low-to-high' }} onFilter={onFilter} />)

    // userEvent.click(screen.getByRole('button', { name: /filter/i }))
    await waitFor(() => expect(onFilter).toBeCalledWith({ platforms: ['windows'], sort_by: 'low-to-high' }))
  })

  it('should filter with checked values', async () => {
    const onFilter = jest.fn()
    renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />)
    userEvent.click(screen.getByLabelText(/windows/i))
    userEvent.click(screen.getByLabelText(/linux/i))
    userEvent.click(screen.getByLabelText(/low to high/i))
    // userEvent.click(screen.getByRole('button', { name: /filter/i }))
    await waitFor(() => {
      expect(onFilter).toHaveBeenCalledTimes(4)
      expect(onFilter).toBeCalledWith({
        platforms: ['windows', 'linux'],
        sort_by: 'low-to-high'
      })
    })
  })

  it('should altern between radio options', async () => {
    const onFilter = jest.fn()
    renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />)
    userEvent.click(screen.getByLabelText(/low to high/i))
    userEvent.click(screen.getByLabelText(/high to low/i))
    // userEvent.click(screen.getByRole('button', { name: /filter/i }))
    await waitFor(() => expect(onFilter).toBeCalledWith({ sort_by: 'high-to-low' }))
  })

  it('should open/close sidebar when filtering on mobile ', async () => {
    const { container } = renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn} />)
    const variant = {
      media: '(max-width:768px)',
      modifier: String(css`
        ${Overlay}
      `)
    }
    const Element = container.firstChild

    await waitFor(() => expect(Element).not.toHaveStyleRule('opacity', '1', variant))
    userEvent.click(screen.getByLabelText(/open filters/))
    await waitFor(() => expect(Element).toHaveStyleRule('opacity', '1', variant))
    userEvent.click(screen.getByLabelText(/close filters/))
    await waitFor(() => expect(Element).not.toHaveStyleRule('opacity', '1', variant))

    userEvent.click(screen.getByLabelText(/open filters/))
    userEvent.click(screen.getByRole('button', { name: /filter/i }))
    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})
