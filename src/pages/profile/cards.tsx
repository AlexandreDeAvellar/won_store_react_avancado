import CardsList, { CardsListProps } from '../../components/CardsList'
import Profile from '../../templates/Profile'

import { paymentCardProps } from '../../components/PaymentOptions/payment-options-mocks'
import { GetServerSidePropsContext } from 'next'
import { protectedRoutesServer } from '../../utils/protected-routes'

export default function ProfileCards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutesServer(context)
  return {
    props: {
      session,
      cards: paymentCardProps
    }
  }
}
