import Heading from '../../components/Heading'
import Base from '../Base'
import Showcase from '../../components/Showcase'
import GameCard, { GameCardProps } from '../../components/GameCard'
import { Container } from '../../components/Container'
import { HighlightProps } from '../../components/Highlight'
import { Grid } from '../../components/Grid'
import { Divider } from '../../components/Divider'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({ recommendedGames, recommendedHighlight, games }: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, i) => (
          <GameCard {...game} key={`wishlist-game-${i}`} />
        ))}
      </Grid>

      <Divider />
    </Container>

    <Showcase title="You may like these games" highlight={recommendedHighlight} game={recommendedGames} />
  </Base>
)
export default Wishlist
