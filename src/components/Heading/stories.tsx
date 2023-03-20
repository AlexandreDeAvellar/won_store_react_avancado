import Heading, { HeadingProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: { type: 'string' }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = { children: 'Most Popular' }
