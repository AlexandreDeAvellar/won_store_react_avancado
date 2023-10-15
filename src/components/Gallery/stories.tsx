import { StoryObj, Meta } from '@storybook/react'
import Gallery, { GalleryProps } from '.'
import { galleryProps } from './gallery-mocks'

export default {
  title: 'Gallery',
  component: Gallery,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

type Story = StoryObj<typeof Gallery>

export const Default: Story = (args: GalleryProps) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)

Default.args = { items: galleryProps }
