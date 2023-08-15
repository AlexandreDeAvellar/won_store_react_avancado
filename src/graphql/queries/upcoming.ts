import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_UPCOMING = gql`
  ${GameFragment}
  ${HighlightFragment}

  query QueryUpcoming($date: Date!) {
    upcomingGames: games(filters: { release_date: { gte: $date } }, sort: "release_date:desc", pagination: { limit: 10 }) {
      data {
        attributes {
          ...GameFragment
        }
        id
      }
    }
    showcase: home {
      data {
        attributes {
          upcomingGamesHighlight: upcoming {
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }
`
