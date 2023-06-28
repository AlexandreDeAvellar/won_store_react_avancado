import { GameCardProps } from '../../components/GameCard'
import { GameCardGraphqlProps, gameCardTransform } from './games'
import { HighlightGraphqlProps, highlightTransform } from './highlight'
import { HighlightProps } from '../../components/Highlight'

export type UpcomingGraphql = {
  upcomingGames: GameCardGraphqlProps
  upcomingGamesHighlight: HighlightGraphqlProps
}

export type UpcomingGraphqlResult = {
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
}

export const upcomingTransform = ({ upcomingGames, upcomingGamesHighlight }: UpcomingGraphql): UpcomingGraphqlResult => {
  return {
    upcomingGames: gameCardTransform(upcomingGames),
    upcomingHighlight: highlightTransform(upcomingGamesHighlight)
  }
}
