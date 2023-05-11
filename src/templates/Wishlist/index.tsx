import Heading from '../../components/Heading'
import Base from '../Base'
import Showcase from '../../components/Showcase'
import GameCard, { GameCardProps } from '../../components/GameCard'
import { Container } from '../../components/Container'
import { HighlightProps } from '../../components/Highlight'
import { Grid } from '../../components/Grid'
import { Divider } from '../../components/Divider'
import Empty from '../../components/Empty'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({ recommendedGames, recommendedHighlight, games = [] }: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty title="Your wishlist is empty" description="Games added to your wishlist will appear here" hasLink />
      )}

      <Divider />
    </Container>

    <Showcase title="You may like these games" highlight={recommendedHighlight} game={recommendedGames} />
  </Base>
)
export default Wishlist
