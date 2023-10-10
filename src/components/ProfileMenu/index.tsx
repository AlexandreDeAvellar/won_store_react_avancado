import Link from 'next/link'
import { useRouter } from 'next/router'
import { accountCircleIcon, listIcon, outInsideArrowIcon } from '../icons'

import * as S from './styles'
import { signOut } from 'next-auth/react'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  const { push } = useRouter()
  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/' })
    push(data.url)
  }

  return (
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link isActive={activeLink === '/profile/me'} title="My profile">
          <S.AccountCircle>{accountCircleIcon}</S.AccountCircle>
          <S.Title>My profile</S.Title>
        </S.Link>
      </Link>

      <Link href="/profile/orders" passHref>
        <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
          <S.FormatListBulleted>{listIcon}</S.FormatListBulleted>
          <S.Title>My orders</S.Title>
        </S.Link>
      </Link>

      <S.Link role="button" onClick={handleSignOut}>
        <S.ExitToApp>{outInsideArrowIcon}</S.ExitToApp>
        <S.Title>Sign out</S.Title>
      </S.Link>
    </S.Nav>
  )
}

export default ProfileMenu
