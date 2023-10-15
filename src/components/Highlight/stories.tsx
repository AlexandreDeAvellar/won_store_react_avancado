import Highlight, { HighlightProps } from '.'
import { StoryObj, Meta } from '@storybook/react'
import { highlightProps } from './highlight-mocks'

const args: HighlightProps = highlightProps

export default {
  title: 'Highlight',
  component: Highlight
} as Meta

type Story = StoryObj<typeof Highlight>

export const Basic: Story = (args: HighlightProps) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

Basic.args = args
