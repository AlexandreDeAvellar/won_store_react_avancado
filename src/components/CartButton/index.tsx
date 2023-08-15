import { useCart } from '../../hooks/use-cart'
import Button, { ButtonProps } from '../Button'

import { addShoppingCartIcon, removeShoppingCartIcon } from '../icons'

export type CartButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

export const CartButton = ({ id, size = 'small', hasText = false }: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()
  const ButtonText = isInCart(id) ? 'Remove from cart' : 'Add to cart'

  const handleIcon = (id: string) => (isInCart(id) ? removeShoppingCartIcon : addShoppingCartIcon)
  const handleAriaLabel = (id: string) => (isInCart(id) ? 'Remove from cart' : 'Add to cart')
  const handleClick = (id: string) => {
    isInCart(id) ? removeFromCart(id) : addToCart(id)
  }

  return (
    <Button size={size} icon={handleIcon(id)} aria-label={handleAriaLabel(id)} onClick={() => handleClick(id)}>
      {hasText && ButtonText}
    </Button>
  )
}
