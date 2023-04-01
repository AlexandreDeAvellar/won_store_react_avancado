import Footer from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Basic: Story = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <Footer {...args} />
  </div>
)

Basic.parameters = {
  backgrounds: { default: 'light' },
  viewport: { defaultViewport: 'mobile2', rotate: '2' }
}
