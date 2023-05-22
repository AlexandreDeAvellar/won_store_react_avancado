import ProfileMenu, { ProfileMenuProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu
} as Meta

export const Basic: Story<ProfileMenuProps> = (args) => <ProfileMenu {...args} />
