import Button, { ButtonProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { type: 'string' }
  }
} as Meta

export const Basic: Story<ButtonProps> = (args) => <Button {...args} />

Basic.args = { children: 'Buy Now' }
