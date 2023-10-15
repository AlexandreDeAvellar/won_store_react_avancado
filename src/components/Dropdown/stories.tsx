import { StoryObj, Meta } from '@storybook/react'
// type Story = StoryObj<typeof >
import Dropdown, { DropdownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown
} as Meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = (args: DropdownProps) => <Dropdown {...args} />

Default.args = {
  title: 'Click here',
  children: (
    <>
      <p>Item</p>
      <p>Item</p>
      <p>Item</p>
    </>
  )
}
