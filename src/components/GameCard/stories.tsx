import { CartContextProps } from '../../hooks/use-cart'
import GameCard, { GameCardProps } from '.'
import { Story, Meta } from '@storybook/react'

const props: GameCardProps = {
  id: '1',
  title: 'Red Dead Redemption 2',
  slug: 'red-dead-redemption-2',
  developer: 'RockStar',
  img: '/img/red-dead-img.jpg',
  price: 'R$ 220,00',
  promotionalPrice: 'R$ 200,00'
}

export default {
  title: 'GameCard',
  component: GameCard,
  args: props,
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} as Meta

export const Basic: Story<GameCardProps> = (args) => (
  <div style={{ width: '25rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '25rem' }}>
    <GameCard {...args} />
  </div>
)

export const IsInCart: Story<GameCardProps & CartContextProps> = (args) => (
  <div style={{ width: '25rem' }}>
    <GameCard {...args} />
  </div>
)

IsInCart.args = {
  isInCart: () => true
}

WithRibbon.args = {
  ribbon: '25% off',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
