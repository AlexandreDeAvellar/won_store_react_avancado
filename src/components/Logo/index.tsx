import * as S from './styles'
import { controlIcon } from '../icons'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
}

const Logo = ({ color = 'white', size = 'normal', hideOnMobile = false, id }: LogoProps) => (
  <S.Wrapper color={color} size={size} hideOnMobile={hideOnMobile}>
    {controlIcon(id)}
  </S.Wrapper>
)
export default Logo
