import { currencyFormat } from '../../utils/format'
import { graphql_host } from './graphql_host'

export type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContent = {
  data: [
    {
      attributes: {
        name: string
        slug: string
        cover: {
          data: {
            attributes: {
              url: string
            }
          }
        }
        developers: {
          data: {
            attributes: {
              name: string
            }
          }
        }
        price: number
      }
      id: string
    }
  ]
}

export const cartTransform = (data: CartContent) => {
  const cartItems: CartItem[] = data?.data.map((e) => ({
    id: e.id,
    img: graphql_host + e.attributes.cover.data.attributes.url,
    price: currencyFormat(e.attributes.price),
    title: e.attributes.name
  }))
  return cartItems
}
