import Button from '../Button'
import * as S from './styles'
import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon'
import Image from 'next/image'
import parse from 'html-react-parser'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const Banner = ({ img, title, subtitle, buttonLink, buttonLabel, ribbon, ribbonColor = 'primary', ribbonSize = 'normal' }: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <S.ImageWrapper>{<Image src={img} alt={title} fill />}</S.ImageWrapper>

    <S.Caption>
      <S.Titile>{title}</S.Titile>
      <S.Subitile>{parse(subtitle)}</S.Subitile>
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)
export default Banner
