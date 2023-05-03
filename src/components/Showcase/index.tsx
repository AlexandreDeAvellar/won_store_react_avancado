import Heading from '../Heading'
import * as S from './styles'
import GameCardSlider from '../GameCardSlider'
import Highlight, { HighlightProps } from '../Highlight'
import { GameCardProps } from '../GameCard'

export type ShowCaseProps = {
  title?: string
  game?: GameCardProps[]
  highlight?: HighlightProps
}

const Showcase = ({ game, highlight, title }: ShowCaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineColor="secondary" lineLeft>
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!game && <GameCardSlider items={game} />}
  </S.Wrapper>
)
export default Showcase
