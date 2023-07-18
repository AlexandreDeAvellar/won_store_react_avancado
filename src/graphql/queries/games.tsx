import { gql, useQuery } from '@apollo/client'
import { GameFragment } from '../../graphql/fragments/game'

export const QUERY_GAMES = gql`
  ${GameFragment}

  query QueryGames($limit: Int!, $start: Int, $where: GameFiltersInput, $sort: [String]) {
    gamesConnection: games(filters: $where, sort: $sort) {
      meta {
        pagination {
          total
        }
      }
    }

    games(pagination: { limit: $limit, start: $start }, filters: $where, sort: $sort) {
      data {
        attributes {
          ...GameFragment
        }
        id
      }
    }
  }
`

type QueryGamesProps = {
  limit: number
  start: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filters?: any
}

export const useQueryGames = ({ limit, start, filters = {} }: QueryGamesProps) => {
  return useQuery(QUERY_GAMES, { variables: { limit, start, ...filters } })
}

// FILTER MODEL
// {
//   "limit": 20,
//   "where": {
//     "developers": { "name": { "in": "Asobo Studio" } },
//     "platforms": {  "name": { "in": ["windows", "linux"] } },
//     "price": { "lte": 130 }
//   }
// }
