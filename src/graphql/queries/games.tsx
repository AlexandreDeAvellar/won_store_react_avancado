import { gql } from '@apollo/client'
import { GameFragment } from '../../graphql/fragments/game'

export const QUERY_GAMES = gql`
  ${GameFragment}

  query QueryGames($limit: Int!) {
    games(pagination: { limit: $limit }) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }
  }
`
