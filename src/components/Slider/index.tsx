import * as S from './styles'
import SlickSlider, { Settings } from 'react-slick'

export type SliderSettings = Settings

export type SilderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider = ({ children, settings }: SilderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)
export default Slider
