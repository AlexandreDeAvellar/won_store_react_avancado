import { StoryObj, Meta } from '@storybook/react'

import { GameCardProps } from 'components/GameCard'
import GameCardSlider from '.'
import { gameCardProps } from './game-card-slider-mocks'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

type Story = StoryObj<typeof GameCardSlider>

export const Default: Story = (args: GameCardProps[]) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={gameCardProps} {...args} />
  </div>
)

Default.args = {}
