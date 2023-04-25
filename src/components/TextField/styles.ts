import styled, { DefaultTheme, css } from 'styled-components'
import { TextFieldProps } from '.'

const inputWrapperModifiers = {
  right: () => css`
    flex-direction: row-reverse;
  `
}

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error: boolean }

type InputWrapperProps = Pick<TextFieldProps, 'iconPosition'>

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: ${theme.spacings.xxsmall} 0;
    border: 0.1rem solid;
    border-color: ${theme.colors.lightGray};

    ${iconPosition === 'right' && inputWrapperModifiers[iconPosition!]}

    span,
    svg {
      color: ${theme.colors.gray};
      width: 1.3rem;
      height: 1.3rem;
    }
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Icon = styled.span`
  ${({ theme }) => css`
    /* margin: 0 ${theme.spacings.xxsmall}; */
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    /* padding: ${theme.spacings.xxsmall}; */
    background: transparent;
    border: 0;
    outline: none;
    max-width: 100%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label}, ${Input}, ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.danger};
    }
    svg,
    ${Label} {
      color: ${theme.colors.danger};
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
    ${!!error && wrapperModifiers.error(theme)}
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
