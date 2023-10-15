import Image from 'next/image'
import Button from '../Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  alignment?: 'right' | 'left'
}

const Highlight = ({ title, subtitle, buttonLabel, buttonLink, backgroundImage, floatImage, alignment = 'right' }: HighlightProps) => (
  <S.Wrapper alignment={alignment}>
    <Image alt={title} src={backgroundImage} layout="fill" objectFit="cover" />
    {!!floatImage && (
      <S.FloatImageWrapper>
        <Image src={floatImage} alt={title} width={400} height={300} objectFit="contain" />
      </S.FloatImageWrapper>
    )}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)
export default Highlight
