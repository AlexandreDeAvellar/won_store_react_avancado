import styled, { DefaultTheme, css } from 'styled-components'
import { RibbonColors, RibbonProps } from '.'
import { darken } from 'polished'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,
  normal: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.medium};
    padding: 0 ${theme.spacings.xsmall};
    right: -1.3rem;

    &::before {
      top: 3rem;
      border-left-width: 1.15rem;
      border-top-width: 0.2em;
    }
  `,
  small: (theme: DefaultTheme) => css`
    height: 2rem;
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.xsmall};
    right: -1.3rem;

    &::before {
      top: 2rem;
      border-left-width: 1.15rem;
      border-top-width: 0.2rem;
    }
  `
}

export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, color, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0;
      border-bottom-width: 1rem;
      border-left-color: transparent;
      border-bottom-color: transparent;
    }

    ${!!color && wrapperModifiers.color(theme, color)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
