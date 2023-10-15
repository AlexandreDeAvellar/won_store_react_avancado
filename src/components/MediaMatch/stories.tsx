import MediaMatch, { MediaMatchProps } from '.'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

type Story = StoryObj<typeof MediaMatch>

export const Desktop: Story = (args: MediaMatchProps) => (
  <MediaMatch greaterThan="medium" {...args}>
    Only Desktop
  </MediaMatch>
)

export const Mobile: Story = (args: MediaMatchProps) => (
  <MediaMatch lessThan="medium" {...args}>
    Only Mobile
  </MediaMatch>
)

Desktop.args = {}
Mobile.parameters = { viewport: { defaultViewport: 'mobile1' } }
