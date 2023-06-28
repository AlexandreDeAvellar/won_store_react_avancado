import { Container } from '../../components/Container'
import { BannerProps } from '../../components/Banner'
import { GameCardProps } from '../../components/GameCard'
import { HighlightProps } from '../../components/Highlight'
import BannerSlider from '../../components/BannerSlider'
import Showcase from '../../components/Showcase'
import Base from '../Base'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighLight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
  freeGamesTitle: string
  newGamesTitle: string
  popularGamesTitle: string
  upcomingTitle: string
}

const Home = (props: HomeTemplateProps) => {
  const {
    banners,
    freeGames,
    freeHighlight,
    mostPopularGames,
    mostPopularHighLight,
    newGames,
    freeGamesTitle,
    newGamesTitle,
    popularGamesTitle,
    upcomingTitle
  } = props
  const { upcomingGames, upcomingHighlight } = props

  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title={newGamesTitle} game={newGames} color="black" />
      </S.SectionNews>

      <S.SectionMostPopular>
        <Showcase title={popularGamesTitle} highlight={mostPopularHighLight} game={mostPopularGames} />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Showcase title={upcomingTitle} game={upcomingGames} highlight={upcomingHighlight} />
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Showcase title={freeGamesTitle} highlight={freeHighlight} game={freeGames} />
      </S.SectionFreeGames>
    </Base>
  )
}

export default Home
