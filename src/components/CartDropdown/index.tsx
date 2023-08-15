import CartIcon from '../CartIcon'
import CartList from '../CartList'
import Dropdown from '../Dropdown'

import * as S from './styles'

const CartDropdown = () => (
  <S.Wrapper>
    <Dropdown title={<CartIcon />}>
      <CartList hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
