import { Story, Meta } from '@storybook/react/types-6-0'
import CardsList, { CardsListProps } from '.'

import { paymentCardProps } from '../PaymentOptions/payment-options-mocks'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: paymentCardProps
  }
} as Meta

export const Default: Story<CardsListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)
