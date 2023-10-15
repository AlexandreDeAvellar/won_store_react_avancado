import { StoryObj, Meta } from '@storybook/react'
import UserDropdown, { UserDropdownProps } from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown
} as Meta

type Story = StoryObj<typeof UserDropdown>

export const Default: Story = (args: UserDropdownProps) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <UserDropdown {...args} />
  </div>
)

Default.args = {
  username: 'Willian'
}
