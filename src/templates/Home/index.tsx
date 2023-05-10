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
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = (props: HomeTemplateProps) => {
  const { banners, freeGames, freeHighlight, mostPopularGames, mostPopularHighLight, newGames } = props
  const { upcomingGames, upcomingHighlight, upcomingMoreGames } = props

  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title="News" game={newGames} />
      </S.SectionNews>

      <S.SectionMostPopular>
        <Showcase title="Most Popular" highlight={mostPopularHighLight} game={mostPopularGames} />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Showcase title="Upcoming" game={upcomingGames} />
        <Showcase highlight={upcomingHighlight} game={upcomingMoreGames} />
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Showcase title="Free Games" highlight={freeHighlight} game={freeGames} />
      </S.SectionFreeGames>
    </Base>
  )
}

export default Home
