import Highlight, { HighlightProps } from '.'
import { Story, Meta } from '@storybook/react'
import { highlightProps } from './highlight-mocks'

const args: HighlightProps = highlightProps

export default {
  title: 'Highlight',
  component: Highlight,
  args
} as Meta

export const Basic: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)
