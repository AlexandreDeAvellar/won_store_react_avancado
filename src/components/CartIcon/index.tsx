import { useCart } from '../../hooks/use-cart'
import { shoppingCartIcon } from '../icons'

import * as S from './styles'

const CartIcon = () => {
  const { quantity } = useCart()

  return (
    <S.Wrapper>
      {quantity > 0 && <S.Badge aria-label="Cart Items">{quantity}</S.Badge>}
      <S.ShoppingCartIcon aria-label="Shopping Cart">{shoppingCartIcon}</S.ShoppingCartIcon>
    </S.Wrapper>
  )
}

export default CartIcon
