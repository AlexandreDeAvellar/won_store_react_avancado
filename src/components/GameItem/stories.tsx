import { StoryObj, Meta } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem
} as Meta

type Story = StoryObj<typeof GameItem>

export const Default: Story = (args: GameItemProps) => <GameItem {...args} />

export const WithPayment: Story = (args: GameItemProps) => <GameItem {...args} />

Default.args = {
  id: '1',
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download/21312ndasd',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
