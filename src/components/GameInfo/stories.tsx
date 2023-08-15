import GameInfo, { GameInfoProps } from '.'
import { Story, Meta } from '@storybook/react'
import { gameInfoProps } from './game-info-mocks'
import { CartContextProps } from '../../hooks/use-cart'

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

export const IsInCart: Story<GameInfoProps & CartContextProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
)

IsInCart.args = {
  isInCart: () => true
}
