import Showcase, { ShowCaseProps } from '.'
import { Story, Meta } from '@storybook/react'
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

export const Basic: Story<ShowCaseProps> = (args) => <Showcase {...args} />
Basic.args = { title: 'Most Popular', highlight: highlightProps, game: gameCardProps }

export const WithoutHighlight: Story<ShowCaseProps> = (args) => <Showcase {...args} />
WithoutHighlight.args = { title: 'Most Popular', game: gameCardProps }

export const WithoutGameCards: Story<ShowCaseProps> = (args) => <Showcase {...args} />
WithoutGameCards.args = { title: 'Most Popular', highlight: highlightProps }
