import { shoppingCartIcon } from '../icons'

import * as S from './styles'

export type CartIconProps = {
  quantity?: number
}

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <S.Wrapper>
    {quantity > 0 && <S.Badge aria-label="Cart Items">{quantity}</S.Badge>}
    <S.ShoppingCartIcon aria-label="Shopping Cart">{shoppingCartIcon}</S.ShoppingCartIcon>
  </S.Wrapper>
)

export default CartIcon
