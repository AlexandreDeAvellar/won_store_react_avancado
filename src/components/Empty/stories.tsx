import { StoryObj, Meta } from '@storybook/react'
import Empty, { EmptyProps } from '.'
import { emptyProps } from './empty-mocks'

export default {
  title: 'Empty',
  component: Empty
} as Meta

type Story = StoryObj<typeof Empty>

export const Default: Story = (args: EmptyProps) => {
  return (
    <div style={{ width: '20rem', height: '15rem' }}>
      <Empty {...args} />
    </div>
  )
}

Default.args = {
  ...emptyProps,
  hasLink: true
}
