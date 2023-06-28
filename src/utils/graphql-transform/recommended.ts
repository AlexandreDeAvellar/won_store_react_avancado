import { HighlightProps } from '../../components/Highlight'
import { GameCardProps } from '../../components/GameCard'
import { GameCardGraphqlProps, gameCardTransform } from './games'
import { HighlightGraphqlProps, highlightTransform } from './highlight'

export type RecommendedGraphqlProps = {
  data: {
    attributes: {
      section: {
        title: string
        highlight: HighlightGraphqlProps[]
        games: GameCardGraphqlProps
      }
    }
  }
}

export type RecommendedGraphqlReturn = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

export const recommendedTransform = ({ data }: RecommendedGraphqlProps): RecommendedGraphqlReturn => {
  const section = data.attributes.section
  return {
    recommendedTitle: section.title,
    recommendedGames: gameCardTransform(section.games),
    recommendedHighlight: highlightTransform(section.highlight[0])
  }
}
