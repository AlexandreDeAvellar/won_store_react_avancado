import Wishlist, { WishlistTemplateProps } from '../../templates/Wishlist'
import { gameCardProps } from '../../components/GameCardSlider/game-card-slider-mocks'
import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from '../../graphql/queries/recommended'
import { recommendedTransform } from 'utils/graphql-transform/recommended'
import { GetServerSidePropsContext } from 'next'
import { protectedRoutesServer } from '../../utils/protected-routes'
import { QUERY_WISHLIST, QueryWishlistProps, QueryWishlistVariables } from '../../graphql/queries/wishlist'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutesServer(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  const { data } = await apolloClient.query({ query: QUERY_RECOMMENDED })
  const { recommendedTitle, recommendedGames, recommendedHighlight } = recommendedTransform(data?.recommended)

  await apolloClient.query<QueryWishlistProps, QueryWishlistVariables>({
    query: QUERY_WISHLIST,
    variables: { identifier: session?.user?.email as string }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      session,
      games: gameCardProps,
      recommendedTitle,
      recommendedGames,
      recommendedHighlight
    }
  }
}
