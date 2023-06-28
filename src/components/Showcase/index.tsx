import Heading from '../Heading'
import * as S from './styles'
import GameCardSlider from '../GameCardSlider'
import Highlight, { HighlightProps } from '../Highlight'
import { GameCardProps } from '../GameCard'

export type ShowCaseProps = {
  title?: string
  game?: GameCardProps[]
  highlight?: HighlightProps
  color?: 'black' | 'white'
}

const Showcase = ({ game, highlight, title, color = 'white' }: ShowCaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineColor="secondary" lineLeft>
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!game && <GameCardSlider items={game} color={color} />}
  </S.Wrapper>
)
export default Showcase
