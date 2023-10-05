import { checkCircleIcon } from '../../components/icons'
import Link from 'next/link'

import Base from 'templates/Base'

import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import Showcase from 'components/Showcase'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import { useCart } from 'hooks/use-cart'
import { useEffect } from 'react'

export type SuccessTemplateProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Success = ({ recommendedTitle, recommendedGames, recommendedHighlight }: SuccessTemplateProps) => {
  const { clearCart, quantity } = useCart()

  useEffect(() => {
    if (quantity > 0) clearCart()
  }, [clearCart, quantity])

  return (
    <Base>
      <Container>
        <S.Wrapper>
          <S.Heading>Your purchase was successful!</S.Heading>

          <S.CheckMark>
            <span>{checkCircleIcon}</span>
          </S.CheckMark>

          <S.Text>
            Wait for your payment details by email. Your game is now available for download inside your{' '}
            <Link href="/profile/orders" passHref legacyBehavior>
              <span>Orders List</span>
            </Link>
            . Enjoy!
          </S.Text>
        </S.Wrapper>
      </Container>

      <Showcase title={recommendedTitle} game={recommendedGames} highlight={recommendedHighlight} />
    </Base>
  )
}

export default Success
