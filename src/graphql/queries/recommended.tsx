import { gql } from '@apollo/client'
import { GameFragment, HighlightFragment } from '../../graphql/fragments'

export const QUERY_RECOMMENDED = gql`
  ${HighlightFragment}
  ${GameFragment}
  query QueryRecommended {
    recommended {
      data {
        attributes {
          section {
            title
            highlight {
              ...HighlightFragment
            }
            games {
              data {
                attributes {
                  ...GameFragment
                }
                id
              }
            }
          }
        }
      }
    }
  }
`
