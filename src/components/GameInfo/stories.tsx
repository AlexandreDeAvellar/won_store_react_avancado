import GameInfo, { GameInfoProps } from '.'
import { Story, Meta } from '@storybook/react'
import { gameInfoProps } from './game-info-mocks'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: gameInfoProps
} as Meta

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)
