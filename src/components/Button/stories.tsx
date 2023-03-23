import Button, { ButtonProps } from '.'
import { Story, Meta } from '@storybook/react'
import { addShoppingCart } from '../icons'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { type: 'string' }
  },
  icon: { type: '' }
} as Meta

export const Basic: Story<ButtonProps> = (args) => <Button {...args} />

Basic.args = { children: 'Buy Now' }

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  children: 'Buy Now',
  size: 'small',
  icon: <> {addShoppingCart} </>
}
