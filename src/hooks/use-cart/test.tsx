import { renderHook, waitFor } from '@testing-library/react'
import { CartProvider, CartProviderProps, useCart } from '.'
import { setStorageItem } from '../../utils/localStorage'
import { cartItems, useCartGamesMock } from './use-cart-mock'
import { MockedProvider } from '@apollo/client/testing'

describe('useCart', () => {
  const ids = ['1', '2']

  it('should render items and its info if there are any in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[useCartGamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItems', ids)
    const { result } = renderHook(() => useCart(), { wrapper })

    await waitFor(() => expect(result.current.items).toStrictEqual(cartItems))
    await waitFor(() => expect(result.current.quantity).toBe(2))
    await waitFor(() => expect(result.current.total).toBe('$38.49'))
  })
})
