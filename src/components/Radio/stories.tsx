import Radio, { RadioProps } from '.'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

type Story = StoryObj<typeof Radio>

export const Basic: Story = (args: RadioProps) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio label="primeiro" labelFor="primeiro" id="primeiro" name="nome" value="primeiro" defaultChecked {...args} />
    </div>
    <div style={{ padding: 10 }}>
      <Radio label="segundo" labelFor="segundo" id="segundo" name="nome" value="segundo" {...args} />
    </div>
    <div style={{ padding: 10 }}>
      <Radio label="terceiro" labelFor="terceiro" id="terceiro" name="nome" value="terceiro" {...args} />
    </div>
  </>
)

Basic.args = {}
