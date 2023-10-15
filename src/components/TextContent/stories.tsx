import TextContent, { TextContentProps } from '.'
import { Meta } from '@storybook/react'
import { textContentProps } from './text-content-mocks'

export default {
  title: 'TextContent',
  component: TextContent,
  args: textContentProps
} as Meta

export const Basic = (args: TextContentProps) => <TextContent {...args} />
