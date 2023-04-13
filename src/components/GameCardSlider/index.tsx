import GameCard, { GameCardProps } from '../GameCard'
import Slider, { SliderSettings } from '../Slider'
import { arrowDownIcon } from '../icons'
import * as S from './styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const responsive = [
  {
    breakpoint: 1375,
    settings: {
      arrows: false,
      slidesToShow: 3.2
    }
  },
  {
    breakpoint: 1024,
    settings: {
      arrows: false,
      slidesToShow: 2.2
    }
  },
  {
    breakpoint: 570,
    settings: {
      arrows: false,
      slidesToShow: 1.2
    }
  },
  {
    breakpoint: 375,
    settings: {
      arrows: false,
      slidesToShow: 1.1
    }
  }
]

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  responsive,
  lazyLoad: 'ondemand',
  nextArrow: <span aria-label="next games">{arrowDownIcon}</span>,
  prevArrow: <span aria-label="previuos games">{arrowDownIcon}</span>
}

const GameCardSlider = ({ items, color = 'white' }: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((e, i) => (
        <GameCard key={i} {...e} />
      ))}
    </Slider>
  </S.Wrapper>
)
export default GameCardSlider
