import Ribbon, { RibbonColors, RibbonSizes } from '../Ribbon'
import { favoriteFilledIcon, favoriteIcon } from '../icons'
import * as S from './styles'
import Link from 'next/link'
import { CartButton } from '../CartButton'

export type GameCardProps = {
  id: string
  slug: string
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const GameCard = ({
  id,
  slug,
  developer,
  img,
  price,
  title,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal'
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <Link href={`game/${slug}`} passHref legacyBehavior>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>

    <S.Content>
      <Link href={`game/${slug}`} passHref legacyBehavior>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>

      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <S.FavIcon aria-label="Remove from Wishlist">{favoriteFilledIcon}</S.FavIcon>
        ) : (
          <S.FavIcon aria-label="Add to Wishlist">{favoriteIcon}</S.FavIcon>
        )}
      </S.FavButton>

      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <CartButton id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)
export default GameCard
