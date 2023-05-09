import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  it('should handle the open/closed mobile menu', () => {
    renderWithTheme(<Menu />)
    const renderMenuFull = screen.getByRole('navigation', { hidden: true })

    expect(renderMenuFull.getAttribute('aria-hidden')).toBe('true')
    expect(renderMenuFull).toHaveStyle({ opacity: '0' })

    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(renderMenuFull.getAttribute('aria-hidden')).toBe('false')
    expect(renderMenuFull).toHaveStyle({ opacity: '1' })

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(renderMenuFull.getAttribute('aria-hidden')).toBe('true')
    expect(renderMenuFull).toHaveStyle({ opacity: '0' })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.queryAllByText(/sign in/i)[0]).toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="any_name" />)

    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.getByText(/my account/i)).toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
  })
})
