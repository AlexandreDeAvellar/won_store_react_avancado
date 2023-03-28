import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${() => css`
    display: flex;
    align-items: center;
    padding: 1rem;
    position: relative;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    height: 1.4rem;
    width: 1.4rem;
    cursor: pointer;
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
  `}
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
  position: absolute;
  left: 56%;
  /* transform: translateX(-50%); */

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(4.8);
      height: 1.4rem;
      width: 1.4rem;
    }

    svg {
      height: 1.4rem;
      width: 1.4rem;
    }
    `}
`

export const MenuGroup = styled.div`
  ${() => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    > div {
      margin-left: 0.2rem;
    }
  `}
`

type MenuFullProps = {
  isOpen: boolean
}

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    opacity: ${isOpen ? 1 : 0};
    transition: opacity 0.3s ease-in-out;
    pointer-events: ${isOpen ? 'all' : 'none'};

    ${MenuLink} {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.large};
      margin-bottom: ${theme.spacings.small};
      font-weight: 600;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`
export const MenuNav = styled.div``

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`

export const CloseMenu = styled.span`
  ${() => css`
    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: 1rem;
      width: 1.4rem;
      height: 1.4rem;
      cursor: pointer;
    }
  `}
`

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xxlarge} ${theme.spacings.xxlarge};

    > span {
      display: block;
      margin: ${theme.spacings.small} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`
