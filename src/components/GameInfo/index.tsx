import Heading from '../Heading'
import Button from '../Button'
import * as S from './styles'
import Ribbon from '../Ribbon'
import { addShoppingCartIcon, favoriteIcon } from '../icons'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ description, price, title }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black">{title}</Heading>
    <S.Description>{description}</S.Description>
    <Ribbon color="secondary">{`${price}`}</Ribbon>

    <S.ButtonsWrapper>
      <Button size="large" icon={addShoppingCartIcon}>
        Add To Cart
      </Button>
      <Button size="large" minimal icon={favoriteIcon}>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)
export default GameInfo
