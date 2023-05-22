import styled, { DefaultTheme } from 'styled-components'
import { css } from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
    ${media.greaterThan('medium')`
      flex-direction: column;
      border: 0;
      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    `}
  `}
`
const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
  `,

  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
}

type LinkProps = {
  isActive?: boolean
}

export const Link = styled.a<LinkProps>`
  svg {
    width: 16px;
    height: 16px;
  }
  ${({ theme, isActive }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    ${isActive && linkModifiers.active(theme)};
    ${!isActive && linkModifiers.default(theme)};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
    > span {
      margin-left: ${theme.spacings.xsmall};
    }
    ${media.lessThan('medium')`
      justify-content: center;
      flex: 1;
      > ${Title} {
        display: none;
        }
      }
    `}
  `}
`

export const Title = styled.span``
export const AccountCircle = styled.span``
export const CreditCard = styled.span``
export const FormatListBulleted = styled.span``
export const ExitToApp = styled.span``
