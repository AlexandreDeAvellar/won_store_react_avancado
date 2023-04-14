import '../../../.jest/match-media-mock'
import { renderWithTheme } from '../../utils/tests/helpers'

import GameCardSlider from '.'
import { gameCardProps } from './game-card-slider-mocks'

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={gameCardProps} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })
})
