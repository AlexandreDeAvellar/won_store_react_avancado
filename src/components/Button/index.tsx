import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: React.ReactNode
  minimal?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button = ({ children, size = 'medium', fullWidth = false, icon, minimal = false, ...args }: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} minimal={minimal} {...args}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)
export default Button
