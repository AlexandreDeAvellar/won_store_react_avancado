import Heading from '../Heading'
import Button from '../Button'
import * as S from './styles'
import Ribbon from '../Ribbon'
import { favoriteIcon } from '../icons'
import { CartButton } from '../CartButton'

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
      <Button size="large" minimal icon={favoriteIcon}>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)
export default GameInfo
