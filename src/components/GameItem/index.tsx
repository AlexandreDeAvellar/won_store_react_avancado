import Image from 'next/image'
import { useCart } from '../../hooks/use-cart'
import { downloadIcon } from '../icons'
import * as S from './styles'

export type PaymentInfoProps = {
  number: string
  flag: string | null
  img: string | null
  purchaseDate: string
}

export type GameItemProps = {
  id: string
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const GameItem = ({ id, img, title, price, downloadLink, paymentInfo }: GameItemProps) => {
  const { isInCart, removeFromCart } = useCart()

  return (
    <S.Wrapper>
      <S.GameContent>
        <S.ImageBox>
          <Image src={img} alt={title} fill />
        </S.ImageBox>

        <S.Content>
          <S.Title>
            {title}
            {!!downloadLink && (
              <S.DownloadLink href={downloadLink} target="_blank" aria-label={`Get ${title} here`}>
                <S.DownloadIcon>{downloadIcon}</S.DownloadIcon>
              </S.DownloadLink>
            )}
          </S.Title>

          <S.Group>
            <S.Price>{price}</S.Price>
            {isInCart(id) && <S.Remove onClick={() => removeFromCart(id)}>Remover</S.Remove>}
          </S.Group>
        </S.Content>
      </S.GameContent>

      {!!paymentInfo && (
        <S.PaymentContent>
          <p>{paymentInfo.purchaseDate}</p>
          <S.CardInfo>
            <span>{paymentInfo.number}</span>
            {!!paymentInfo.img && !!paymentInfo.flag && <img src={paymentInfo.img} alt={paymentInfo.flag} />}
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Wrapper>
  )
}

export default GameItem
