import { CartItem } from '../graphql-transform'

export type CreatePaymentIntentParams = {
  items: CartItem[]
  token: string
}

export const createPaymentIntent = async ({ items, token }: CreatePaymentIntentParams) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/create-payment-intent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ cart: items })
  })

  return await response.json()
}
