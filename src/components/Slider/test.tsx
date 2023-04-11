import { screen } from '@testing-library/react'
import '../../../.jest/match-media-mock'

import Slider, { SliderSettings } from '.'
import { renderWithTheme } from '../../utils/tests/helpers'

const horizontalSettings: SliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

describe('<Slider />', () => {
  it('should render children as slide item', () => {
    const { container } = renderWithTheme(
      <Slider settings={horizontalSettings}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Slider>
    )
    expect(screen.getByText(/item 1/i).parentElement?.parentElement).toHaveClass('slick-slide')
    expect(screen.getByText(/item 2/i).parentElement?.parentElement).toHaveClass('slick-slide')
    expect(container.firstChild).toMatchSnapshot()
  })
})
