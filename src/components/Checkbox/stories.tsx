import Checkbox, { CheckboxProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Basic: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox name="category" label="Action" labelFor="action" isChecked {...args} />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox name="category" label="Adventure" labelFor="adventure" {...args} />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox name="category" label="Strategy" labelFor="strategy" {...args} />
    </div>
  </>
)
