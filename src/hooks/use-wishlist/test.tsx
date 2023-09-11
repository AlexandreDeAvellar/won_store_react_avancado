import { MockedProvider } from '@apollo/client/testing'
import { renderHook, waitFor } from '@testing-library/react'

import { useWishlist, WishlistContextProviderProps, WishlistProvider } from '.'
import {
  mockCreateWishList,
  mockGetWishlist,
  mockRemoveFromWishlist,
  mockUpdateWishlist,
  mockUpdateWishlistItems,
  mockWishlistItems
} from './use-wishlist-mock'
import { act } from 'react-dom/test-utils'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const mockUseSession = jest.spyOn(require('next-auth/react'), 'useSession')
const mockSession = { jwt: 'hashed_id', user: { email: 'mail@mail.com', id: '3' } }
mockUseSession.mockImplementation(() => ({ data: mockSession }))

describe('useWishlist', () => {
  it('should return wishlist items', async () => {
    const wrapper = ({ children }: WishlistContextProviderProps) => {
      return (
        <MockedProvider mocks={[mockGetWishlist]}>
          <WishlistProvider>{children}</WishlistProvider>
        </MockedProvider>
      )
    }
    const { result } = renderHook(() => useWishlist(), { wrapper })

    expect(result.current.loading).toBe(true)
    await waitFor(() => expect(result.current.items).toStrictEqual(mockWishlistItems))
  })

  it('should check if the game is in the wishlist', async () => {
    const wrapper = ({ children }: WishlistContextProviderProps) => (
      <MockedProvider mocks={[mockGetWishlist]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useWishlist(), { wrapper })
    await waitFor(() => expect(result.current.isInWishlist('1')).toBe(true))
    await waitFor(() => expect(result.current.isInWishlist('2')).toBe(true))
    await waitFor(() => expect(result.current.isInWishlist('3')).toBe(false))
  })

  it('should add item in wishlist creating new list', async () => {
    const wrapper = ({ children }: WishlistContextProviderProps) => {
      return (
        <MockedProvider mocks={[mockCreateWishList]}>
          <WishlistProvider>{children}</WishlistProvider>
        </MockedProvider>
      )
    }

    const { result } = renderHook(() => useWishlist(), { wrapper })

    await waitFor(() => expect(result.current.loading).toBe(true))
    await act(() => result.current.addWishlist('1'))
    await waitFor(() => expect(result.current.items).toStrictEqual([mockWishlistItems[0]]))
  })

  it('should add item in wishlist updating the current list', async () => {
    const wrapper = ({ children }: WishlistContextProviderProps) => {
      return (
        <MockedProvider mocks={[mockGetWishlist, mockUpdateWishlist]}>
          <WishlistProvider>{children}</WishlistProvider>
        </MockedProvider>
      )
    }

    const { result } = renderHook(() => useWishlist(), { wrapper })

    await waitFor(() => expect(result.current.loading).toBe(true))
    await waitFor(() => expect(result.current.items.length).toBe(2))
    await act(() => result.current.addWishlist('3'))
    await waitFor(() => expect(result.current.items.length).toBe(3))
    await waitFor(() => expect(result.current.items).toStrictEqual(mockUpdateWishlistItems))
  })

  it('should remove game from wishlist', async () => {
    const wrapper = ({ children }: WishlistContextProviderProps) => {
      return (
        <MockedProvider mocks={[mockGetWishlist, mockRemoveFromWishlist]}>
          <WishlistProvider>{children}</WishlistProvider>
        </MockedProvider>
      )
    }

    const { result } = renderHook(() => useWishlist(), { wrapper })

    await waitFor(() => expect(result.current.items.length).toBe(2))
    await act(() => result.current.removeFromWishlist('2'))
    await waitFor(() => expect(result.current.items.length).toBe(1))
    await waitFor(() => expect(result.current.items).toStrictEqual([mockWishlistItems[0]]))
  })
})
