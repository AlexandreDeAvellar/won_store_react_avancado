import Banner, { BannerProps } from '.'
import { bannerProps } from './banner-mocks'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Banner',
  component: Banner,
  argTypes: { ribbon: { type: 'string' } },
  args: bannerProps,
  parameters: { layout: 'fullscreen' }
} as Meta

export const Basic: Story<BannerProps> = (args) => <Banner {...args} />

export const WithRibbon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '80rem', maxHeight: '20rem', position: 'relative', backgroundColor: '#ff0000' }}>
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '25% off',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
