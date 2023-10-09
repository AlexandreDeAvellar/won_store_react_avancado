import { gql } from '@apollo/client'
import { GameFragment } from '../fragments'
import { GameCardGraphqlProps } from '../../utils/graphql-transform'

export type QueryOrdersVariables = { identifier: string }
export type QueryOrdersProps = {
  orders: {
    data: [
      {
        id: string
        attributes: {
          createdAt: string
          card_brand: string
          card_last4: string
          games: GameCardGraphqlProps
        }
      }
    ]
  }
}

export const Query_Orders = gql`
  ${GameFragment}

  query QueryOrders($identifier: ID!) {
    orders(filters: { user: { id: { eq: $identifier } } }) {
      data {
        id
        attributes {
          createdAt
          card_brand
          card_last4
          games {
            data {
              id
              attributes {
                ...GameFragment
              }
            }
          }
        }
      }
    }
  }
`
