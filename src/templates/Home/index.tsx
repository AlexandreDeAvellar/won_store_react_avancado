import { Container } from '../../components/Container'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import { BannerProps } from '../../components/Banner'
import { GameCardProps } from '../../components/GameCard'
import { HighlightProps } from '../../components/Highlight'
import BannerSlider from '../../components/BannerSlider'
import Showcase from '../../components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighLight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = (props: HomeTemplateProps) => {
  const { banners, freeGames, freeHighlight, mostPopularGames, mostPopularHighLight, newGames } = props
  const { upcommingGames, upcommingHighlight, upcommingMoreGames } = props

  return (
    <section>
      <Container>
        <Menu />
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
        <Showcase title="Upcomming" game={upcommingGames} />
        <Showcase highlight={upcommingHighlight} game={upcommingMoreGames} />
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Showcase title="Free Games" highlight={freeHighlight} game={freeGames} />
      </S.SectionFreeGames>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  )
}

export default Home
