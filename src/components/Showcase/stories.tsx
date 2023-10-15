import Showcase, { ShowCaseProps } from '.'
import { StoryObj, Meta } from '@storybook/react'
import { highlightProps } from '../Highlight/highlight-mocks'
import { gameCardProps } from '../GameCardSlider/game-card-slider-mocks'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ]
} as Meta

type Story = StoryObj<typeof Showcase>

export const Basic: Story = (args: ShowCaseProps) => <Showcase {...args} />
Basic.args = { title: 'Most Popular', highlight: highlightProps, game: gameCardProps }

export const WithoutHighlight: Story = (args: ShowCaseProps) => <Showcase {...args} />
WithoutHighlight.args = { title: 'Most Popular', game: gameCardProps }

export const WithoutGameCards: Story = (args: ShowCaseProps) => <Showcase {...args} />
WithoutGameCards.args = { title: 'Most Popular', highlight: highlightProps }
