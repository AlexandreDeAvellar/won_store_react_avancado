import { StoryObj, Meta } from '@storybook/react'
import Empty, { EmptyProps } from '.'
import { emptyProps } from './empty-mocks'

export default {
  title: 'Empty',
  component: Empty
} as Meta

type Story = StoryObj<typeof Empty>

export const Default: Story = (args: EmptyProps) => <Empty {...args} />

Default.args = {
  ...emptyProps,
  hasLink: true
}
