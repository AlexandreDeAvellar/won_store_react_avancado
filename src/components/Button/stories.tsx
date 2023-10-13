import Button, { ButtonProps } from '.'
import { Meta, StoryObj } from '@storybook/react'
import { addShoppingCartIcon } from '../icons'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { type: 'string' },
    disabled: { type: 'boolean' }
  },
  icon: { type: '' }
} as Meta

type Story = StoryObj<typeof Button>

export const Basic: Story = (args: ButtonProps) => <Button {...args} />

Basic.args = { children: 'Buy Now' }

export const withIcon: Story = (args: ButtonProps) => <Button {...args} />

withIcon.args = {
  children: 'Buy Now',
  size: 'small',
  icon: <> {addShoppingCartIcon} </>
}

export const asLink: Story = (args: ButtonProps) => <Button {...args} />

asLink.args = {
  children: 'Buy Now',
  size: 'large',
  as: 'a',
  href: '/link'
}
