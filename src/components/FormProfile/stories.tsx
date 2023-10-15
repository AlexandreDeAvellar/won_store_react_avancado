import FormProfile from '.'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/FormProfile',
  component: FormProfile
} as Meta

type Story = StoryObj<typeof FormProfile>

export const Default: Story = () => (
  <div style={{ maxWidth: 860, margin: 'auto' }}>
    <FormProfile />
  </div>
)

Default.args = {}
