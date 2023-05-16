import Button, { ButtonProps } from '.'
import { Story, Meta } from '@storybook/react'
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

export const Basic: Story<ButtonProps> = (args) => <Button {...args} />

Basic.args = { children: 'Buy Now' }

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  children: 'Buy Now',
  size: 'small',
  icon: <> {addShoppingCartIcon} </>
}

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />

asLink.args = {
  children: 'Buy Now',
  size: 'large',
  as: 'a',
  href: '/link'
}
