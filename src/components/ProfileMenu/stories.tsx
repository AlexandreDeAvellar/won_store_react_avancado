import ProfileMenu, { ProfileMenuProps } from '.'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu
} as Meta

type Story = StoryObj<typeof ProfileMenu>

export const Basic: Story = (args: ProfileMenuProps) => <ProfileMenu {...args} />

Basic.args = {}
