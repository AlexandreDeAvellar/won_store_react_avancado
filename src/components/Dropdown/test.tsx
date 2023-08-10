import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render as renderWithTheme, screen } from '../../utils/test-utils'

import Dropdown from '.'

describe('<Dropdown />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toogle dropdown">Click here</h1>

    renderWithTheme(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    )
  })

  it('should render title', () => {
    expect(screen.getByLabelText(/toogle dropdown/)).toBeInTheDocument()
  })

  it('should handle open/close dropdown', async () => {
    const content = screen.getByText(/content/).parentElement!

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content.getAttribute('aria-hidden')).toBe('true')

    userEvent.click(screen.getByLabelText(/toogle dropdown/))

    await waitFor(() => expect(content).toHaveStyle({ opacity: 1 }))
    expect(content.getAttribute('aria-hidden')).toBe('false')
  })

  it('should handle open/close dropdown when clicking on overlay', async () => {
    const container = screen.getByText(/content/i).parentElement!
    const overlay = container.nextElementSibling!

    expect(overlay).toHaveStyle({ opacity: 0 })

    await waitFor(() => userEvent.click(screen.getByLabelText(/toogle dropdown/i)))
    expect(overlay).toHaveStyle({ opacity: 1 })

    await waitFor(() => userEvent.click(overlay))
    expect(overlay).toHaveStyle({ opacity: 0 })
  })
})
