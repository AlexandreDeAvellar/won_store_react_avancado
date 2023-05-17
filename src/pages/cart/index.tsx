import Cart, { CartProps } from '../../templates/Cart'

import { gameCardProps } from '../../components/GameCardSlider/game-card-slider-mocks'
import { gameItemProps } from '../../components/GameItem/game-item-mocks'
import { highlightProps } from '../../components/Highlight/highlight-mocks'
import { paymentCardProps } from '../../components/PaymentOptions/payment-options-mocks'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      items: gameItemProps,
      total: '$ 430,00',
      cards: paymentCardProps,
      recommendedHighlight: highlightProps,
      recommendedGames: gameCardProps
    }
  }
}
