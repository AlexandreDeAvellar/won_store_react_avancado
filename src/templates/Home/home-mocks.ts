import { HomeTemplateProps } from '.'
import { bannerSliderProps } from '../../components/BannerSlider/banner-slider-mocks'
import { gameCardProps } from '../../components/GameCardSlider/game-card-slider-mocks'
import { highlightProps } from '../../components/Highlight/highlight-mocks'

export const homeTemplateProps: HomeTemplateProps = {
  banners: bannerSliderProps,
  freeGames: gameCardProps,
  freeHighlight: highlightProps,
  mostPopularGames: gameCardProps,
  mostPopularHighLight: highlightProps,
  newGames: gameCardProps,
  upcommingGames: gameCardProps,
  upcommingHighlight: highlightProps,
  upcommingMoreGames: gameCardProps
}
