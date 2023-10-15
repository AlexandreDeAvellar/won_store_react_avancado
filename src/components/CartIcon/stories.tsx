import { StoryObj, Meta } from '@storybook/react'
import CartIcon from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  args: {}
} as Meta

type Story = StoryObj<typeof CartIcon>

export const Default: Story = () => <CartIcon />
export const withItems: Story = () => <CartIcon />

Default.args = {}

withItems.args = { quantity: 3 }
