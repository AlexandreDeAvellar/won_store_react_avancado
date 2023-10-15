import { StoryObj, Meta } from '@storybook/react'
import OrdersList, { OrdersListProps } from '.'

import { ordersListProps } from './orders-list-mocks'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList
} as Meta

type Story = StoryObj<typeof OrdersList>

export const Default: Story = (args: OrdersListProps) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)

Default.args = ordersListProps
