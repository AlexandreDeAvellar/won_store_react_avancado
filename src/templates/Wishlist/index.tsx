import Heading from '../../components/Heading'
import Base from '../Base'
import Showcase from '../../components/Showcase'
import GameCard, { GameCardProps } from '../../components/GameCard'
import { Container } from '../../components/Container'
import { HighlightProps } from '../../components/Highlight'
import { Grid } from '../../components/Grid'
import { Divider } from '../../components/Divider'
import Empty from '../../components/Empty'
import { useWishlist } from '../../hooks/use-wishlist'
import Loader from '../../components/Loader'

export type WishlistTemplateProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({ recommendedTitle, recommendedGames, recommendedHighlight }: WishlistTemplateProps) => {
  const { items, loading } = useWishlist()
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {loading ? (
          <Loader />
        ) : items.length ? (
          <Grid>
            {items?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty title="Your wishlist is empty" description="Games added to your wishlist will appear here" hasLink />
        )}

        <Divider />
      </Container>

      <Showcase title={recommendedTitle} highlight={recommendedHighlight} game={recommendedGames} />
    </Base>
  )
}
export default Wishlist
