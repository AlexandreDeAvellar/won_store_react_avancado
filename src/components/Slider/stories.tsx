import Slider, { SilderProps, SliderSettings } from '.'
import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'

const horizontalSettings: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const verticalSettings: SliderSettings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

export default {
  title: 'Slider',
  component: Slider
} as Meta

const Slide = styled.div`
  background: grey;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1 solid red;
  color: white;
  text-align: center;
`

export const Horizontal: Story<SilderProps> = () => (
  <Slider settings={horizontalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
  </Slider>
)

export const Vertical: Story<SilderProps> = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
  </Slider>
)
