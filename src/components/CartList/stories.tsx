import { Story, Meta } from '@storybook/react/types-6-0'
import CartList, { CartListProps } from '.'

import { cartListProps } from './cart-list-mocks'

export default {
  title: 'CartList',
  component: CartList,
  args: cartListProps
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

export const WithButton: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)

export const Empty: Story<CartListProps> = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)
