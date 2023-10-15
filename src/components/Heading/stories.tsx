import Heading, { HeadingProps } from '.'
import { Meta } from '@storybook/react'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: { type: 'string' }
  }
} as Meta

export const Default = (args: HeadingProps) => <Heading {...args} />

Default.args = { children: 'Most Popular' }
