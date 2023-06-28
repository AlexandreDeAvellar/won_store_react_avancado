import { GameCardGraphqlProps } from './games'
import { HighlightGraphqlProps } from './highlight'

export type SectionGraphqlHighlight = {
  title: string
  highlight: HighlightGraphqlProps[]
}

export type SingleSectionGraphqlHighlight = {
  title: string
  highlight: HighlightGraphqlProps
}

export type SectionsGraphqlAttributes = {
  newGames: SectionGraphqlHighlight
  popularGames: SectionGraphqlHighlight & { games: GameCardGraphqlProps }
  upcoming: SingleSectionGraphqlHighlight
  freeGames: SingleSectionGraphqlHighlight
}

export type SectionsGraphqlTransform = {
  data: {
    attributes: SectionsGraphqlAttributes
  }
}

export const sectionsTransform = ({ data }: SectionsGraphqlTransform): SectionsGraphqlAttributes => {
  const { freeGames, newGames, popularGames, upcoming } = data.attributes
  return { freeGames, newGames, popularGames, upcoming }
}
