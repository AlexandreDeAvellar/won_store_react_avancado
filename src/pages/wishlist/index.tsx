import Wishlist, { WishlistTemplateProps } from '../../templates/Wishlist'
import { gameCardProps } from '../../components/GameCardSlider/game-card-slider-mocks'
import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from '../../graphql/queries/recommended'
import { recommendedTransform } from 'utils/graphql-transform/recommended'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({ query: QUERY_RECOMMENDED })
  const { recommendedTitle, recommendedGames, recommendedHighlight } = recommendedTransform(data?.recommended)

  return {
    props: {
      games: gameCardProps,
      recommendedTitle,
      recommendedGames,
      recommendedHighlight
    }
  }
}
