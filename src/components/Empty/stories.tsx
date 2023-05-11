import { Story, Meta } from '@storybook/react/types-6-0'
import Empty, { EmptyProps } from '.'
import { emptyProps } from './empty-mocks'

export default {
  title: 'Empty',
  component: Empty
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />

Default.args = {
  ...emptyProps,
  hasLink: true
}
