import React from 'react'
import * as S from './styles'
import SlickSlider, { Settings } from 'react-slick'

export type SliderSettings = Settings

export type SilderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

const Slider: React.ForwardRefRenderFunction<SlickSlider, SilderProps> = ({ children, settings }, ref) => (
  <S.Wrapper>
    <SlickSlider ref={ref} {...settings}>
      {children}
    </SlickSlider>
  </S.Wrapper>
)
export default React.forwardRef(Slider)
