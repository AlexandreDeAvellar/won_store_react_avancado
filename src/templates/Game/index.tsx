import { NextSeo } from 'next-seo'

import TextContent from '../../components/TextContent'
import Gallery, { GalleryImageProps } from '../../components/Gallery'
import GameInfo, { GameInfoProps } from '../../components/GameInfo'
import Base from '../Base'
import * as S from './styles'
import GameDetails, { GameDetailsProps } from '../../components/GameDetails'
import { GameCardProps } from '../../components/GameCard'
import { HighlightProps } from '../../components/Highlight'
import Showcase from '../../components/Showcase'
import { Divider } from '../../components/Divider'

export type GameTemplateProps = {
  slug?: string
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
  recommendedTitle: string
}

const Game = ({
  recommendedTitle,
  cover,
  gameInfo,
  gallery,
  description,
  details,
  recommendedGames,
  upcomingGames,
  upcomingHighlight,
  slug
}: GameTemplateProps) => (
  <Base>
    <NextSeo
      title={`${gameInfo.title} - Won Games`}
      description={gameInfo.description}
      canonical={`https://wongames.willianjusten.com.br/game/${slug}`}
      openGraph={{
        url: `https://wongames.willianjusten.com.br/game/${slug}`,
        title: `${gameInfo.title} - Won Games`,
        description: gameInfo.description,
        images: [
          {
            url: cover,
            alt: `${gameInfo.title}`
          }
        ]
      }}
    />
    <S.Cover role="img" aria-label="cover" src={cover}></S.Cover>

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
      {!!gallery && (
        <S.SectionGallery>
          <Gallery items={gallery} />
        </S.SectionGallery>
      )}

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionDetails>

      <Showcase title="Upcoming Games" game={upcomingGames} highlight={upcomingHighlight} />

      <Showcase title={recommendedTitle} game={recommendedGames} />
    </S.Main>
  </Base>
)
export default Game
