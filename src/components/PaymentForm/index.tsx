import { addShoppingCartIcon, errorIcon } from '../icons'
import Button from '../Button'
import Heading from '../Heading'
import * as S from './styles'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/use-cart'
import { createPaymentIntent } from '../../utils/stripe/methods'
import { Session } from 'next-auth'
import { FormLoading } from '../Form'
import { useRouter } from 'next/router'

export type PaymentFormParams = { session: Session }

const PaymentForm = ({ session }: PaymentFormParams) => {
  const { items } = useCart()
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const [freeGames, setFreeGames] = useState(false)
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()
  const stripe = useStripe()
  const elements = useElements()

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

  const handleChange = (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    if (freeGames) {
      push('/success')
      return
    }

    if (!stripe || !elements) return

    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!
      }
    })

    if (error) {
      setError(`Falha no pagamento: ${error.message}`)
      setLoading(false)
    } else {
      setError(null)
      setLoading(false)

      push('/success')
    }
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading color="black" size="small" lineBottom>
            Payment
          </Heading>

          {freeGames ? (
            <S.FreeGames>Only free games, click buy and enjoy!</S.FreeGames>
          ) : (
            <CardElement onChange={handleChange} options={{ hidePostalCode: true }} />
          )}
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
          <Button fullWidth icon={loading ? <FormLoading /> : addShoppingCartIcon} disabled={!freeGames && (disabled || !!error)}>
            {!loading && <span>Buy now</span>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm
