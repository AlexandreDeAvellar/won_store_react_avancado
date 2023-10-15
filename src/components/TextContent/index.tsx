import Heading from '../Heading'
import parse from 'html-react-parser'

import * as S from './styles'

export type TextContentProps = {
  title?: string
  content: string
}

const TextContent = ({ title, content }: TextContentProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    <div>{parse(content)}</div>
  </S.Wrapper>
)

export default TextContent
