import Highlight, { HighlightProps } from '.'
import { Story, Meta } from '@storybook/react'

const args: HighlightProps = {
  title: "Read Dead it's back",
  subtitle: "Come see john's new adventures",
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.jpg',
  floatImage: '/img/red-dead-float.png'
}

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
