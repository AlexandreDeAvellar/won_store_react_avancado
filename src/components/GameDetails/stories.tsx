import { StoryObj, Meta } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'
import { gameDetailsProps } from './game-details-mocks'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
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

type Story = StoryObj<typeof GameDetails>

export const Default: Story = (args: GameDetailsProps) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)

Default.args = gameDetailsProps
