import Logo, { LogoProps } from '.'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Logo',
  component: Logo
} as Meta

type Story = StoryObj<typeof Logo>

export const Basic: Story = (args: LogoProps) => <Logo {...args} />
Basic.args = {}
