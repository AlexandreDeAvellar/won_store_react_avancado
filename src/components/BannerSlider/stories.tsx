import { Meta } from '@storybook/react/'
import BannerSlider, { BannerSliderProps } from '.'
import { bannerSliderProps } from './banner-slider-mocks'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items: bannerSliderProps },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default = (args: BannerSliderProps) => (
  <div style={{ maxWidth: '110rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
