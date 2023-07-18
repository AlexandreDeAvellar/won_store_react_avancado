import { gql } from '@apollo/client'

export const GameFragment = gql`
  fragment GameFragment on Game {
    id
    name
    slug
    cover {
      data {
        attributes {
          url
        }
      }
    }
    developers {
      data {
        attributes {
          name
        }
      }
    }
    price
  }
`
