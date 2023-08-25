import Link from 'next/link'
import { accountCircleIcon, favoriteIcon, outInsideArrowIcon, arrowDownIcon } from '../icons'

import Dropdown from '../Dropdown'

import * as S from './styles'
import { signOut } from 'next-auth/react'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <S.Wrapper>
    <Dropdown
      title={
        <>
          <S.AccountCircle>{accountCircleIcon}</S.AccountCircle>
          <S.Username>{username}</S.Username>
          <S.ChevronDown>{arrowDownIcon}</S.ChevronDown>
        </>
      }
    >
      <S.Nav>
        <Link href="/profile/me" passHref>
          <S.Link>
            <S.AccountCircle>{accountCircleIcon}</S.AccountCircle>
            <span>My profile</span>
          </S.Link>
        </Link>
        <Link href="/wishlist" passHref>
          <S.Link title="Wishlist">
            <S.FavoriteBorder>{favoriteIcon}</S.FavoriteBorder>
            <span>Wishlist</span>
          </S.Link>
        </Link>

        <S.Link title="Sign out" role="button" onClick={() => signOut({ redirect: false })}>
          <S.ExitToApp>{outInsideArrowIcon}</S.ExitToApp>
          <span>Sign out</span>
        </S.Link>
      </S.Nav>
    </Dropdown>
  </S.Wrapper>
)

export default UserDropdown
