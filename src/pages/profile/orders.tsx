import OrdersList, { OrdersListProps } from '../../components/OrdersList'
import Profile from 'templates/Profile'

import { GetServerSidePropsContext } from 'next'
import { protectedRoutesServer } from '../../utils/protected-routes'
import { initializeApollo } from '../../utils/apollo'
import { Query_Orders, QueryOrdersProps, QueryOrdersVariables } from '../../graphql/queries/orders'
import { ordersTransform } from '../../utils/graphql-transform'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutesServer(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryOrdersProps, QueryOrdersVariables>({
    query: Query_Orders,
    variables: { identifier: session?.user?.id as string }
  })

  return {
    props: { session, items: ordersTransform(data) }
  }
}
