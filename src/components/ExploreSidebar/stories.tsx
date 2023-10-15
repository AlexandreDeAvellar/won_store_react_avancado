import { StoryObj, Meta } from '@storybook/react'
import ExploreSidebar, { ExploreSidebarProps } from '.'

import { explorerSidebarItemProps } from './explorer-sidebar-mocks'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {},
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<typeof ExploreSidebar>

export const Default: Story = (args: ExploreSidebarProps) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
)

export const WithInitialValues: Story = (args: ExploreSidebarProps) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} initialValues={{ platforms: ['windows', 'linux'], sort_by: 'low-to-high' }} />
  </div>
)

const args: ExploreSidebarProps = { items: explorerSidebarItemProps, onFilter: () => console.log('Filter') }

Default.args = args
WithInitialValues.args = args
