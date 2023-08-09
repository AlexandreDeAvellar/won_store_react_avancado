import { act, renderHook, waitFor } from '@testing-library/react'
import { CartProvider, CartProviderProps, useCart } from '.'
import { setStorageItem } from '../../utils/localStorage'
import { cartItems, useCartGamesMock } from './use-cart-mock'
import { MockedProvider } from '@apollo/client/testing'

describe('useCart', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  const CART_KEYS = 'cartItems'
  const ids = ['1', '2']

  it('should render items and its info if there are any in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[useCartGamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem(CART_KEYS, ids)
    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.loading).toBe(true)

    await waitFor(() => expect(result.current.items).toStrictEqual(cartItems))
    await waitFor(() => expect(result.current.quantity).toBe(2))
    await waitFor(() => expect(result.current.total).toBe('$38.49'))

    expect(result.current.loading).toBe(false)
  })

  it('should return true/false if the item is already in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[useCartGamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem(CART_KEYS, ids)
    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.isInCart('1')).toBe(true)
    expect(result.current.isInCart('3')).toBe(false)
  })

  it('should add item in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[useCartGamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem(CART_KEYS, ids)
    const { result } = renderHook(useCart, { wrapper })

    act(() => result.current.addToCart('3'))
    expect(result.current.quantity).toBe(3)
  })

  it('should remove and item from the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[useCartGamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem(CART_KEYS, ids)
    const { result } = renderHook(useCart, { wrapper })

    act(() => result.current.removeFromCart('2'))
    expect(result.current.quantity).toBe(1)
  })

  it('should clear the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem(CART_KEYS, ids)
    const { result } = renderHook(useCart, { wrapper })

    act(() => result.current.clearCart())
    expect(result.current.quantity).toBe(0)
  })
})
