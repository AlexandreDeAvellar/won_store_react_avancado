import { HomeTemplateProps } from '.'
import { bannerSliderProps } from '../../components/BannerSlider/banner-slider-mocks'
import { highlightProps } from '../../components/Highlight/highlight-mocks'

export const homeTemplateProps: HomeTemplateProps = {
  banners: bannerSliderProps,
  freeGames: [],
  freeHighlight: highlightProps,
  mostPopularGames: [],
  mostPopularHighLight: highlightProps,
  newGames: [],
  upcommingGames: [],
  upcommingHighlight: highlightProps,
  upcommingMoreGames: []
}
