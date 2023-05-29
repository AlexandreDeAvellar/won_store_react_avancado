import * as S from './styles'
import { menuIcon, searchIcon, shoppingCartIcon, closeIcon } from '../icons'
import Logo from '../Logo'
import MediaMatch from '../MediaMatch'
import { useState } from 'react'
import Button from '../Button'
import Link from 'next/link'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper aria-label="Open Menu" onClick={() => setIsOpen(true)}>
          {menuIcon}
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref legacyBehavior>
          <Logo hideOnMobile />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref legacyBehavior>
            <S.MenuLink href="/"> Home </S.MenuLink>
          </Link>
          <Link href="/games" passHref legacyBehavior>
            <S.MenuLink> Explore </S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper aria-label="Search">{searchIcon}</S.IconWrapper>
        <S.IconWrapper aria-label="Open Shopping Cart">{shoppingCartIcon}</S.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref legacyBehavior>
              <Button size="medium">Sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <S.CloseMenu aria-label="Close Menu" onClick={() => setIsOpen(false)}>
          {closeIcon}
        </S.CloseMenu>

        <S.MenuNav>
          <Link href="/" passHref legacyBehavior>
            <S.MenuLink href="/"> Home </S.MenuLink>
          </Link>
          <Link href="/games" passHref legacyBehavior>
            <S.MenuLink> Explore </S.MenuLink>
          </Link>

          {!!username && (
            <>
              <S.MenuLink href="#"> My account </S.MenuLink>
              <S.MenuLink href="#"> Wishlist </S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref legacyBehavior>
              <Button fullWidth size="medium" as="a">
                Sign in
              </Button>
            </Link>
            <span>Or</span>
            <Link href="/sign-up" passHref legacyBehavior>
              <S.CreateAccount title="sign up">Sign Up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}
export default Menu
