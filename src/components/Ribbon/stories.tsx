import Ribbon, { RibbonProps } from '.'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Ribbon',
  component: Ribbon
} as Meta

type Story = StoryObj<typeof Ribbon>

export const Basic: Story = (args: RibbonProps) => (
  <div style={{ width: '40rem', height: '25rem', position: 'relative', backgroundColor: '#888' }}>
    <Ribbon {...args}> Best Seller </Ribbon>
  </div>
)

Basic.args = {}
