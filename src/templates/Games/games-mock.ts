import { QUERY_GAMES } from '../../graphql/queries/games'

export const mockNoGames = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 4, start: 0, where: {} }
  },
  result: {
    data: {
      gamesConnection: { meta: { pagination: { total: 0 } } }
    }
  }
}

export const mockGames = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 4, start: 0, where: {} }
  },
  result: {
    data: {
      gamesConnection: { meta: { pagination: { total: 2 } } },
      games: {
        data: [
          {
            attributes: {
              id: '1',
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
      gamesConnection: { meta: { pagination: { total: 2 } } },
      games: {
        data: [
          {
            attributes: {
              id: '2',
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
