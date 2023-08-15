import { Story, Meta } from '@storybook/react/types-6-0'
import CartDropdown from '.'

import { cartItems } from '../../hooks/use-cart/use-cart-mock'

const items = cartItems

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    cartContextValue: { items, quantity: items.length },
    total: 'R$ 300,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown />
  </div>
)

export const Empty: Story = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown />
  </div>
)

Empty.args = { cartContextValue: {} }
