import { PaymentIntent } from '@stripe/stripe-js'
import { CartItem } from '../graphql-transform'

export type FetcherParams = {
  url: string
  body: string
  token: string
}

export const fetcher = async ({ url, body, token }: FetcherParams) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body
  })

  return await response.json()
}

export type CreatePaymentIntentParams = {
  items: CartItem[]
  token: string
}

export const createPaymentIntent = async ({ items, token }: CreatePaymentIntentParams) => {
  return await fetcher({ url: '/api/orders/create-payment-intent', body: JSON.stringify({ cart: items }), token })
}

export type CreatePaymentParams = {
  items: CartItem[]
  paymentIntent?: PaymentIntent
  token: string
}

export const CreatePayment = async ({ items, paymentIntent, token }: CreatePaymentParams) => {
  return await fetcher({
    url: '/api/orders',
    body: JSON.stringify({ cart: items, paymentIntentId: paymentIntent?.id, paymentMethod: paymentIntent?.payment_method }),
    token
  })
}
