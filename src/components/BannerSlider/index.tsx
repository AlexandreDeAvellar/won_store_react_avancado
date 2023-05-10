import * as S from './styles'
import Banner, { BannerProps } from '../Banner'
import Slider, { SliderSettings } from '../Slider'

export const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [{ breakpoint: 1170, settings: { vertical: false, verticalSwiping: false } }]
}

export type BannerSliderProps = { items: BannerProps[] }

const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <Banner key={item.title} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}
export default BannerSlider
