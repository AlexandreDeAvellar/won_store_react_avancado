import TextContent, { TextContentProps } from '.'
import { Story, Meta } from '@storybook/react'
import { textContentProps } from './text-content-mocks'

export default {
  title: 'TextContent',
  component: TextContent,
  args: textContentProps
} as Meta

export const Basic: Story<TextContentProps> = (args) => <TextContent {...args} />
