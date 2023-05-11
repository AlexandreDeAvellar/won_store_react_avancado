import Wishlist, { WishlistTemplateProps } from '../../templates/Wishlist'
import { gameCardProps } from '../../components/GameCardSlider/game-card-slider-mocks'
import { highlightProps } from '../../components/Highlight/highlight-mocks'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      games: gameCardProps,
      recommendedGames: gameCardProps,
      recommendedHighlight: highlightProps
    }
  }
}
