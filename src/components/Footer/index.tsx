import Link from 'next/link'
import Heading from '../Heading'
import Logo from '../Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>
        <a href="mail@mail.com"> mail@mail.com </a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a href="#instagram">Instagram </a>
          <a href="#twitter"> Twitter </a>
          <a href="#youtube"> Youtube </a>
          <a href="#facebook"> Facebook </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">Home</Link>
          <Link href="/games">Store </Link>
          <Link href="/search">Buscar </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <nav aria-labelledby="footer contact">
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
          <span>Lorem ipsum</span>
        </nav>
      </S.Column>
    </S.Content>

    <S.Copiright> Won Games 2023 ©️ All Rights reserved. </S.Copiright>
  </S.Wrapper>
)
export default Footer
