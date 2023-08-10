import '../../../.jest/match-media-mock'

import { render as renderWithTheme, screen } from '../../utils/test-utils'

import BannerSlider from '.'
import { BannerProps } from '../Banner'
import { bannerSliderProps } from './banner-slider-mocks'

const items: BannerProps[] = bannerSliderProps.splice(0, 2)

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)
    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(screen.getByRole('heading', { name: /Defy death 1/i, hidden: false })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Defy death 2/i, hidden: true })).toBeInTheDocument()
  })

  it('should render with the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
