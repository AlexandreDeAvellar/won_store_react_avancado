import Button from '../Button'
import * as S from './styles'
import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon'
import Image from 'next/image'

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

    <S.ImageWrapper>
      <Image src={img} alt={title} layout="fill" objectFit="fill" />
    </S.ImageWrapper>

    <S.Caption>
      <S.Titile>{title}</S.Titile>
      <S.Subitile dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)
export default Banner
