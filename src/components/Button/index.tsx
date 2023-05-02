import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: React.ReactNode
  minimal?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  { children, size = 'medium', fullWidth = false, icon, minimal = false, ...args },
  ref
) => {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} minimal={minimal} ref={ref} {...args}>
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}

export default React.forwardRef(Button)
