import { useEffect, useRef, useState } from 'react'
import { arrowDownIcon, closeIcon } from '../icons'

import Slider, { SliderSettings } from '../Slider'
import SlickSlider from 'react-slick'

import * as S from './styles'
import Image from 'next/image'

const commonSettings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <span aria-label="next games">{arrowDownIcon}</span>,
  prevArrow: <span aria-label="previuos games">{arrowDownIcon}</span>
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

const modalSettings: SliderSettings = { ...commonSettings, slidesToShow: 1 }

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => key === 'Escape' && setIsOpen(false)
    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <Image
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index, true)
            }}
            height={200}
            width={200}
            style={{ width: 'auto', height: 'auto' }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close role="button" aria-label="close modal" onClick={() => setIsOpen(false)}>
          <S.CloseIcon>{closeIcon}</S.CloseIcon>
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <Image key={`gallery-${index}`} src={item.src} alt={`${item.label}`} fill />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
