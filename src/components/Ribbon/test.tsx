import Ribbon from '.'
import { render as renderWithTheme, screen } from '../../utils/test-utils'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon> Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should render the primary color by default', () => {
    renderWithTheme(<Ribbon> Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({ backgroundColor: '#F231A5' })
  })

  it('should render the secondary color if is informed', () => {
    renderWithTheme(<Ribbon color="secondary"> Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('should render with the normal size as default', () => {
    renderWithTheme(<Ribbon> Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({ height: '3rem', fontSize: '1rem' })
  })

  it('should render with the small size', () => {
    renderWithTheme(<Ribbon size="small"> Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({ height: '2rem', fontSize: '0.8rem' })
  })
})
