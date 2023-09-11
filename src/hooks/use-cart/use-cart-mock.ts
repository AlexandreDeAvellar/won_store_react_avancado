import { graphql_host } from '../../utils/graphql-transform/graphql_host'
import { QUERY_GAMES } from '../../graphql/queries/games'

export const mockUseCartItems = {
  data: [
    {
      attributes: {
        name: 'Enter the Gungeon',
        slug: 'enter-the-gungeon',
        cover: {
          data: {
            attributes: {
              url: '/uploads/enter_the_gungeon_46f4fe4c68.jpg'
            }
          }
        },
        developers: {
          data: [
            {
              attributes: {
                name: 'Dodge Roll'
              }
            }
          ]
        },
        price: 27.99,
        __typename: 'Game'
      },
      id: '1'
    },
    {
      attributes: {
        name: 'The Witcher: Enhanced Edition',
        slug: 'the-witcher',
        cover: {
          data: {
            attributes: {
              url: '/uploads/the_witcher_fe844be564.jpg'
            }
          }
        },
        developers: {
          data: [
            {
              attributes: {
                name: 'CD PROJEKT RED'
              }
            }
          ]
        },
        price: 10.5,
        __typename: 'Game'
      },
      id: '2'
    }
  ]
}

export const useCartGamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 1000, start: 0, where: { id: { in: ['1', '2'] } } }
  },
  result: {
    data: {
      gamesConnection: {
        meta: {
          pagination: {
            total: 2
          }
        }
      },
      games: mockUseCartItems
    }
  }
}

export const cartItems = [
  {
    id: '1',
    img: graphql_host + '/uploads/enter_the_gungeon_46f4fe4c68.jpg',
    price: '$27.99',
    title: 'Enter the Gungeon'
  },
  {
    id: '2',
    img: graphql_host + '/uploads/the_witcher_fe844be564.jpg',
    price: '$10.50',
    title: 'The Witcher: Enhanced Edition'
  }
]
