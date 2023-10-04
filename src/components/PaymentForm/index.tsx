import { addShoppingCartIcon, errorIcon } from '../icons'
import Button from '../Button'
import Heading from '../Heading'
import * as S from './styles'
import { CardElement } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/use-cart'
import { createPaymentIntent } from '../../utils/stripe/methods'
import { Session } from 'next-auth'

export type PaymentFormParams = { session: Session }

const PaymentForm = ({ session }: PaymentFormParams) => {
  const { items } = useCart()
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items && items.length) {
        const data = await createPaymentIntent({ items, token: session.jwt })

        if (data.freeGames) {
          setFreeGames(true)
          return
        }

        if (data.error) {
          setError(data.error)
          return
        }

        setFreeGames(false)
        setClientSecret(data.client_secret)
      }
    }

    setPaymentMode()
  }, [items, session])

  let a = 'asd'
  if (a === 'number') {
    a = clientSecret
    a = ''
    console.log(a)
  }

  const handleChange = (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }
  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>

        {freeGames ? <S.FreeGames>Only free games, click buy and enjoy!</S.FreeGames> : <CardElement onChange={handleChange} />}
        {error && (
          <S.Error>
            <span>{errorIcon}</span>
            {error}
          </S.Error>
        )}
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button fullWidth icon={addShoppingCartIcon} disabled={!freeGames && (disabled || !!error)}>
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
