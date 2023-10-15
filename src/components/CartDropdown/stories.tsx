import { StoryObj, Meta } from '@storybook/react'
import CartDropdown from '.'

import { cartItems } from '../../hooks/use-cart/use-cart-mock'

const items = cartItems

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<typeof CartDropdown>

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

const args = { cartContextValue: { items, quantity: items.length }, total: 'R$ 300,00' }

Default.args = args
Empty.args = { cartContextValue: {} }
