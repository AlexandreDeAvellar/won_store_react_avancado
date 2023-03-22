import MediaMatch from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = (args) => (
  <MediaMatch greaterThan="medium" {...args}>
    Only Desktop
  </MediaMatch>
)

export const Mobile: Story = (args) => (
  <MediaMatch lessThan="medium" {...args}>
    Only Mobile
  </MediaMatch>
)

Mobile.parameters = { viewport: { defaultViewport: 'mobile1' } }
