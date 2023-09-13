import Heading from '../Heading'
import * as S from './styles'
import Ribbon from '../Ribbon'
import { CartButton } from '../CartButton'
import WishlistButton from '../WishlistButton'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: string
}

const GameInfo = ({ id, description, price, title }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black">{title}</Heading>
    <S.Description>{description}</S.Description>
    <Ribbon color="secondary">{`${price}`}</Ribbon>

    <S.ButtonsWrapper>
      <CartButton id={id} size="large" hasText />
      <WishlistButton id={id} hasText size="large" />
    </S.ButtonsWrapper>
  </S.Wrapper>
)
export default GameInfo
