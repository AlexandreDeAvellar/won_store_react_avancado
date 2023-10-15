import { StoryObj, Meta } from '@storybook/react'
import CartList, { CartListProps } from '.'

export default {
  title: 'CartList',
  component: CartList,
  argsTypes: {
    cartContextValue: { type: '' },
    items: { type: '' }
  }
} as Meta

type Story = StoryObj<typeof CartList>

export const Default: Story = (args: CartListProps) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

export const WithButton: Story = (args: CartListProps) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)

export const Empty = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)

Default.args = { hasButton: false }
WithButton.args = { hasButton: true }
Empty.args = { cartContextValue: {} }
