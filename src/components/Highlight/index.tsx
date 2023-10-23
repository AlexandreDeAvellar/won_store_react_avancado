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
    <Image alt={title} src={backgroundImage} fill />
    {!!floatImage && (
      <S.FloatImageWrapper>
        {<Image src={floatImage} alt={title} width={500} height={500} style={{ width: '25rem', height: '15rem' }} />}
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
