import { gql } from '@apollo/client'
import { GameFragment } from '../fragments'
import { GameCardGraphqlProps } from '../../utils/graphql-transform'

export type MutationCreateWishlistVariables = { user: string; games: string[] }
export type MutationCreateWishlistProps = {
  createWishlist: {
    data: {
      id: string
      attributes: {
        games: GameCardGraphqlProps
      }
    }
  }
}

export const MUTATION_CREATE_WISHLIST = gql`
  ${GameFragment}

  mutation MutationCreateWishlist($data: WishlistInput!) {
    createWishlist(data: $data) {
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

// create to test
// {
//   "data": {"user": "3", "games": ["291", "297"]}
// }

export type MutationUpdateWishlistVariables = {
  id: string
  data: { user: string; games: string[] }
}

export type MutationUpdateWishlistProps = {
  updateWishlist: {
    data: {
      id: string
      attributes: {
        games: GameCardGraphqlProps
      }
    }
  }
}

export const MUTATION_UPDATE_WISHLIST = gql`
  ${GameFragment}

  mutation MutationUpdateWishlist($id: ID!, $data: WishlistInput!) {
    updateWishlist(id: $id, data: $data) {
      data {
        id
        attributes {
          games {
            data {
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

// update to test
// {
//   "id": "29", "data": {  "user": "3",  "games": [292, 297] }
// }
