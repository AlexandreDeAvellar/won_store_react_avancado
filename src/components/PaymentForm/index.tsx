import { addShoppingCartIcon } from '../icons'
import Button from '../Button'
import Heading from '../Heading'
import * as S from './styles'

const PaymentForm = () => {
  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button fullWidth icon={addShoppingCartIcon}>
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
