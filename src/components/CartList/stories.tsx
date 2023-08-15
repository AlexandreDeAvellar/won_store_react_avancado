import { Story, Meta } from '@storybook/react/types-6-0'
import CartList from '.'
import { cartItems } from '../../hooks/use-cart/use-cart-mock'

export default {
  title: 'CartList',
  component: CartList,
  argsTypes: {
    cartContextValue: { type: '' },
    items: { type: '' }
  },
  args: {
    cartContextValue: {
      items: cartItems
    },
    total: 'R$ 300,00'
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

export const WithButton: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)

export const Empty: Story = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)

Empty.args = { cartContextValue: {} }
