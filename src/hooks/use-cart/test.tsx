import { renderHook } from '@testing-library/react'
import { CartProvider, CartProviderProps, useCart } from '.'
import { setStorageItem } from '../../utils/localStorage'

describe('useCart', () => {
  const ids = ['1', '2']

  it('should render items and its info if there are any in the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => <CartProvider>{children}</CartProvider>

    setStorageItem('cartItems', ids)
    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.items).toStrictEqual(ids)
  })
})
