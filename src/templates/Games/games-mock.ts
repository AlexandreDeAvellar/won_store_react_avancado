import { QUERY_GAMES } from '../../graphql/queries/games'

export const mockGames = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 4, start: 0 }
  },
  result: {
    data: {
      games: {
        data: [
          {
            attributes: {
              name: 'Sample Game',
              slug: 'sample-game',
              cover: {
                data: {
                  attributes: {
                    url: '/sample-game.jpg'
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'Sample developer'
                    }
                  }
                ]
              },
              price: 54.9,
              price2: 54.9,
              __typename: 'Game'
            }
          }
        ]
      }
    }
  }
}

export const mockMoreGames = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 4, start: 1 }
  },
  result: {
    data: {
      games: {
        data: [
          {
            attributes: {
              name: 'More Game',
              slug: 'more-game',
              cover: {
                data: {
                  attributes: {
                    url: '/more-game.jpg'
                  }
                }
              },
              developers: {
                data: [
                  {
                    attributes: {
                      name: 'More developer'
                    }
                  }
                ]
              },
              price: 88.9,
              price2: 88.9,
              __typename: 'Game'
            }
          }
        ]
      }
    }
  }
}
