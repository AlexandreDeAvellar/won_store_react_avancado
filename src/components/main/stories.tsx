import Main from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />

Basic.args = {
  title: 'React Avançado',
  description: 'TypeScript, ReactJs, NextJs e Styled-Components'
}
