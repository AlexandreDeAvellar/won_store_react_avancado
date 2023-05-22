import OrdersList, { OrdersListProps } from '../../components/OrdersList'
import Profile from 'templates/Profile'

import { ordersListProps } from '../../components/OrdersList/orders-list-mocks'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: ordersListProps
  }
}
