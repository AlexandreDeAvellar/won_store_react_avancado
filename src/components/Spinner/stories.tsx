import { StoryObj, Meta } from '@storybook/react'
import Spinner, { SpinnerProps } from '.'

export default {
  title: 'Spinner',
  component: Spinner
} as Meta

type Story = StoryObj<typeof Spinner>

export const Default: Story = (args: SpinnerProps) => <Spinner {...args} />

Default.args = {}
