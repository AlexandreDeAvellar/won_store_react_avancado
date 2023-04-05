import Banner, { BannerProps } from '.'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Banner',
  component: Banner,
  argTypes: { ribbon: { type: 'string' } },
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
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
