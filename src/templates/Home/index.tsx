import { Container } from '../../components/Container'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'
import { BannerProps } from '../../components/Banner'
import { GameCardProps } from '../../components/GameCard'
import Highlight, { HighlightProps } from '../../components/Highlight'
import GameCardSlider from '../../components/GameCardSlider'
import BannerSlider from '../../components/BannerSlider'

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
        {/* <Container> */}
        <Heading lineColor="secondary" color="black" lineLeft>
          News
        </Heading>
        <GameCardSlider items={newGames} />
        {/* </Container> */}
      </S.SectionNews>

      <S.SectionMostPopular>
        {/* <Container> */}
        <Heading lineColor="secondary" lineLeft>
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighLight} />
        <GameCardSlider items={mostPopularGames} />
        {/* </Container> */}
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        {/* <Container> */}
        <Heading lineColor="secondary" lineLeft>
          Upcomming
        </Heading>
        <GameCardSlider items={upcommingGames} />
        <Highlight {...upcommingHighlight} />
        <GameCardSlider items={upcommingMoreGames} />
        {/* </Container> */}
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        {/* <Container> */}
        <Heading lineColor="secondary" lineLeft>
          Free Games
        </Heading>
        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} />
        {/* </Container> */}
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
