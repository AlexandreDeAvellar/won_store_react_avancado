import CardsList, { CardsListProps } from '../../components/CardsList'
import Profile from '../../templates/Profile'

import { paymentCardProps } from '../../components/PaymentOptions/payment-options-mocks'

export default function ProfileCards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: paymentCardProps
    }
  }
}
