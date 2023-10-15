import Main from '.'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Main',
  component: Main
} as Meta

type Story = StoryObj<typeof Main>

export const Basic: Story = (args: { title: string; description: string }) => <Main {...args} />

Basic.args = {
  title: 'React Avançado',
  description: 'TypeScript, ReactJs, NextJs e Styled-Components'
}
