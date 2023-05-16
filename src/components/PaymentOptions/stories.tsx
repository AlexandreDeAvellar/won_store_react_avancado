import { Story, Meta } from '@storybook/react/types-6-0'
import PaymentOptions, { PaymentOptionsProps } from '.'

import { paymentCardProps } from './payment-options-mocks'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: paymentCardProps
  }
} as Meta

export const Default: Story<PaymentOptionsProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
)
