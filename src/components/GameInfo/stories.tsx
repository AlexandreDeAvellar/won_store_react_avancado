import GameInfo, { GameInfoProps } from '.'
import { StoryObj, Meta } from '@storybook/react'
import { gameInfoProps } from './game-info-mocks'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: gameInfoProps
} as Meta

type Story = StoryObj<typeof GameInfo>

export const Default: Story = (args: GameInfoProps) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)

export const IsInCart: Story = (args: GameInfoProps) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)

Default.args = gameInfoProps
IsInCart.args = gameInfoProps
