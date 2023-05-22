import { Story, Meta } from '@storybook/react/types-6-0'
import OrdersList, { OrdersListProps } from '.'

import { ordersListProps } from './orders-list-mocks'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: ordersListProps
} as Meta

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)
