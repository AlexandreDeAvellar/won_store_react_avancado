import { StoryObj, Meta } from '@storybook/react'
import TextField, { TextFieldProps } from '.'
import { mailIcon } from '../icons/mail-icon'

export default {
  title: 'Form/TextField',
  component: TextField,
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: 'boolean' }
  }
} as Meta

type Story = StoryObj<typeof TextField>

export const Default: Story = (args: TextFieldProps) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const WithIcon: Story = (args: TextFieldProps) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} icon={mailIcon} />
  </div>
)

export const WithError: Story = (args: TextFieldProps) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} icon={mailIcon} />
  </div>
)

const args = {
  label: 'E-mail',
  name: 'Email',
  id: 'Email',
  initialValue: '',
  placeholder: 'john.cage@gmail.com',
  error: ''
}

Default.args = args
WithIcon.args = args
WithError.args = { ...args, error: 'Error Message' }
