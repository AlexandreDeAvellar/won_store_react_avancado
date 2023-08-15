import { gql } from '@apollo/client'

import { BannerFragment, GameFragment, HighlightFragment } from '../fragments/'

export const QUERY_HOME = gql`
  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}

  query QueryHome($date: Date!) {
    banners {
      data {
        attributes {
          ...BannerFragment
        }
      }
    }
    newGames: games(filters: { release_date: { gte: $date } }, sort: "release_date:desc", pagination: { limit: 10 }) {
      data {
        attributes {
          ...GameFragment
        }
        id
      }
    }
    upcomingGames: games(filters: { release_date: { gt: $date } }, sort: "release_date:asc", pagination: { limit: 10 }) {
      data {
        attributes {
          ...GameFragment
        }
        id
      }
    }
    freeGames: games(filters: { price: { eq: 0 } }, sort: "release_date:desc", pagination: { limit: 10 }) {
      data {
        attributes {
          ...GameFragment
        }
        id
      }
    }

    sections: home {
      data {
        attributes {
          newGames {
            title
            highlight {
              ...HighlightFragment
            }
          }
          popularGames {
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
          upcoming {
            title
            highlight {
              ...HighlightFragment
            }
          }
          freeGames {
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
