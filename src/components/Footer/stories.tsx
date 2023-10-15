import Footer from '.'
import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Footer',
  component: Footer
} as Meta

type Story = StoryObj<typeof Footer>

export const Basic: Story = () => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <Footer />
  </div>
)

Basic.parameters = {
  backgrounds: { default: 'light' },
  viewport: { defaultViewport: 'mobile2', rotate: '2' }
}
