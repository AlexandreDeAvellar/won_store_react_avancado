import Link from 'next/link'
import { accountCircleIcon, listIcon, cardIcon, outInsideArrowIcon } from '../icons'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="My profile">
        <S.AccountCircle>{accountCircleIcon}</S.AccountCircle>
        <S.Title>My profile</S.Title>
      </S.Link>
    </Link>

    <Link href="/profile/cards" passHref>
      <S.Link isActive={activeLink === '/profile/cards'} title="My cards">
        <S.CreditCard>{cardIcon}</S.CreditCard>
        <S.Title>My cards</S.Title>
      </S.Link>
    </Link>

    <Link href="/profile/orders" passHref>
      <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
        <S.FormatListBulleted>{listIcon}</S.FormatListBulleted>
        <S.Title>My orders</S.Title>
      </S.Link>
    </Link>

    <Link href="/logout" passHref>
      <S.Link>
        <S.ExitToApp>{outInsideArrowIcon}</S.ExitToApp>
        <S.Title>Sign out</S.Title>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu
