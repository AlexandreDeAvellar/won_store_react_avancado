import { render as renderWithTheme, screen } from '../../utils/test-utils'
import { WishlistContextDefault } from '../../hooks/use-wishlist'
import WishlistButton from '.'
import { act } from 'react-dom/test-utils'
import { userEvent } from '@storybook/testing-library'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const mockUseSession = jest.spyOn(require('next-auth/react'), 'useSession')
const mockSession = { jwt: 'hashed_id', user: { email: 'mail@mail.com', id: '3' } }
mockUseSession.mockImplementation(() => ({ data: mockSession }))

describe('<WishlistButton />', () => {
  it('should render a button to add to wishlist', () => {
    renderWithTheme(<WishlistButton id="1" />, { wishlistProviderProps: WishlistContextDefault })
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a button to remove from wishlist', () => {
    renderWithTheme(<WishlistButton id="1" />, { wishlistProviderProps: { ...WishlistContextDefault, isInWishlist: () => true } })
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render a button with add to wishlist text', () => {
    renderWithTheme(<WishlistButton hasText id="1" />, { wishlistProviderProps: WishlistContextDefault })
    expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a button with remove from wishlist text', () => {
    renderWithTheme(<WishlistButton hasText id="1" />, { wishlistProviderProps: { ...WishlistContextDefault, isInWishlist: () => true } })
    expect(screen.getByText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should not render if not logged', () => {
    mockUseSession.mockImplementationOnce(() => ({ data: null }))
    renderWithTheme(<WishlistButton id="1" hasText />, { wishlistProviderProps: WishlistContextDefault })
    expect(screen.queryByText(/add to wishlist/i)).not.toBeInTheDocument()
  })

  it('should add to wishlist', async () => {
    const wishlistProviderProps = { ...WishlistContextDefault, isInWishlist: () => false, addWishlist: jest.fn() }
    renderWithTheme(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    await act(() => userEvent.click(screen.getByText(/add to wishlist/i)))

    expect(wishlistProviderProps.addWishlist).toHaveBeenCalledWith('1')
  })

  it('should remove from wishlist', async () => {
    const wishlistProviderProps = { ...WishlistContextDefault, isInWishlist: () => true, removeFromWishlist: jest.fn() }
    renderWithTheme(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    await act(() => userEvent.click(screen.getByText(/remove from wishlist/i)))

    expect(wishlistProviderProps.removeFromWishlist).toHaveBeenCalledWith('1')
  })
})
