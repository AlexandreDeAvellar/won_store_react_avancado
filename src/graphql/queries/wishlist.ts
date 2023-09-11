import { QueryHookOptions, gql, useQuery } from '@apollo/client'
import { GameFragment } from '../fragments'
import { GameCardGraphqlProps } from '../../utils/graphql-transform'

export type QueryWishlistVariables = { identifier: string }
export type QueryWishlistProps = {
  wishlists: {
    data: [
      {
        id: string
        attributes: {
          games: GameCardGraphqlProps
        }
      }
    ]
  }
}

export const QUERY_WISHLIST = gql`
  ${GameFragment}

  query QueryWishlist($identifier: String!) {
    wishlists(filters: { user: { email: { eq: $identifier } } }) {
      data {
        id
        attributes {
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

// get to test
// {
//   "identifier": "ale4@mail.com"
// }

export function useQueryWishlist(options?: QueryHookOptions<QueryWishlistProps, QueryWishlistVariables>) {
  return useQuery<QueryWishlistProps, QueryWishlistVariables>(QUERY_WISHLIST, options)
}
