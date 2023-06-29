import Cart, { CartProps } from '../../templates/Cart'

import { gameItemProps } from '../../components/GameItem/game-item-mocks'
import { paymentCardProps } from '../../components/PaymentOptions/payment-options-mocks'
import { initializeApollo } from '../../utils/apollo'
import { recommendedTransform } from '../../utils/graphql-transform/recommended'
import { QUERY_RECOMMENDED } from '../../graphql/queries/recommended'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({ query: QUERY_RECOMMENDED })
  const { recommendedTitle, recommendedGames, recommendedHighlight } = recommendedTransform(data?.recommended)

  return {
    props: {
      items: gameItemProps,
      total: '$ 430,00',
      cards: paymentCardProps,
      recommendedTitle,
      recommendedGames,
      recommendedHighlight
    }
  }
}
