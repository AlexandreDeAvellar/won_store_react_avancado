import '../../../.jest/match-media-mock'
import { renderWithTheme } from '../../utils/tests/helpers'

import GameCardSlider from '.'
import { items } from './game-card-slider-mocks'

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })
})
