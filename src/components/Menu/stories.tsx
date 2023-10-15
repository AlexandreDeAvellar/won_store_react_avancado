import Menu, { MenuProps } from '.'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Menu',
  component: Menu
} as Meta

type Story = StoryObj<typeof Menu>

export const Basic: Story = (args: MenuProps) => <Menu {...args} />

Basic.story = {
  parameters: {
    backgrounds: { default: 'dark' },
    layout: 'fullscreen'
  }
}

export const Logged: Story = (args: MenuProps) => <Menu {...args} />
Logged.args = { username: 'Nome Usuário' }
