import { gameBySlugTransform } from './game-by-slug'
import { game, gameResult } from './game-by-slug-mocks'

describe('gameBySlugTransform', () => {
  test('should return correctly GameTemplateProps', async () => {
    const result = gameBySlugTransform(game)
    expect(result.cover).toBe(gameResult.cover)
    expect(result.description).toBe(gameResult.description)
    expect(result.details).toEqual(gameResult.details)
    expect(result.gameInfo).toEqual(gameResult.gameInfo)
    expect(result.gallery).toEqual(gameResult.gallery)
  })
})
