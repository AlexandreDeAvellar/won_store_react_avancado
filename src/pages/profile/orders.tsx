import OrdersList, { OrdersListProps } from '../../components/OrdersList'
import Profile from 'templates/Profile'

import { ordersListProps } from '../../components/OrdersList/orders-list-mocks'
import { GetServerSidePropsContext } from 'next'
import { protectedRoutesServer } from '../../utils/protected-routes'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutesServer(context)
  return {
    props: { session, ordersListProps }
  }
}
