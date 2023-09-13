import { useWishlist } from '../../hooks/use-wishlist'
import { favoriteFilledIcon, favoriteIcon } from '../icons'
import Button, { ButtonProps } from '../Button'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import Spinner from '../Spinner'

export type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({ id, hasText = false, size = 'small' }: WishlistButtonProps) => {
  const { data: session } = useSession()
  const { isInWishlist, addWishlist, removeFromWishlist } = useWishlist()
  const [loading, setLoading] = useState(false)
  const buttonText = isInWishlist(id) ? 'Remove from Wishlist' : 'Add to Wishlist'

  if (!session) return null

  const handleClick = async () => {
    setLoading(true)
    !isInWishlist(id) ? await addWishlist(id) : await removeFromWishlist(id)
    setLoading(false)
  }

  return (
    <Button
      onClick={handleClick}
      minimal
      size={size}
      icon={
        isInWishlist(id) ? (
          loading ? (
            <Spinner />
          ) : (
            <span aria-label={buttonText}>{favoriteFilledIcon}</span>
          )
        ) : (
          <span aria-label={buttonText}>{favoriteIcon}</span>
        )
      }
    >
      {hasText && buttonText}
    </Button>
  )
}

export default WishlistButton
