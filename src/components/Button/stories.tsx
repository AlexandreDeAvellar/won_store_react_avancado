import Button, { ButtonProps } from '.'
import { Meta, StoryObj } from '@storybook/react'
import { addShoppingCartIcon } from '../icons'

export default {
  title: 'Button',
  component: Button,
  args: { children: 'Buy Now' },
  argTypes: {
    children: { type: 'string' },
    disabled: { type: 'boolean' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] }
  },
  icon: { type: '' }
} as Meta

type Story = StoryObj<typeof Button>

export const Basic: Story = (args: ButtonProps) => <Button {...args} />

Basic.args = { children: 'Buy Now' }

export const withIcon: Story = (args: ButtonProps) => <Button {...args} />

withIcon.args = {
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
