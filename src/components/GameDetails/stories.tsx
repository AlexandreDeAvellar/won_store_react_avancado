import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetails, { GameDetailsProps } from '.'
import { gameDetailsProps } from './game-details-mocks'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: gameDetailsProps,
  argTypes: {
    genres: {
      control: {
        type: 'inline-check',
        options: [...gameDetailsProps.genres, 'Action', 'Narrative']
      }
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: gameDetailsProps.platforms
      }
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
