import * as S from './styles'
import { menuIcon, searchIcon, shoppingCartIcon, closeIcon } from '../icons'
import Logo from '../Logo'
import MediaMatch from '../MediaMatch'
import { useState } from 'react'
import Button from '../Button'

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
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#"> Home </S.MenuLink>
          <S.MenuLink href="#"> Explore </S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper aria-label="Search">{searchIcon}</S.IconWrapper>
        <S.IconWrapper aria-label="Open Shopping Cart">
          {shoppingCartIcon}
        </S.IconWrapper>

        {!!username && (
          <MediaMatch greaterThan="medium">
            <Button size="medium">Sign in</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <S.CloseMenu aria-label="Close Menu" onClick={() => setIsOpen(false)}>
          {closeIcon}
        </S.CloseMenu>

        <S.MenuNav>
          <S.MenuLink href="#"> Home </S.MenuLink>
          <S.MenuLink href="#"> Explore </S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#"> My account </S.MenuLink>
              <S.MenuLink href="#"> Wishlist </S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="medium">
              Log in now
            </Button>
            <span>Or</span>
            <S.CreateAccount href="#" title="sign up">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}
export default Menu
