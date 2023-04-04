import Ribbon from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Ribbon',
  component: Ribbon
} as Meta

export const Basic: Story = (args) => (
  <div style={{ width: '40rem', height: '25rem', position: 'relative', backgroundColor: '#888' }}>
    <Ribbon {...args}> Best Seller </Ribbon>
  </div>
)
