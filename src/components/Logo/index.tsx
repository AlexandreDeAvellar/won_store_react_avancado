import * as S from './styles'
import { controlIcon } from '../icons'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
}

const Logo = ({
  color = 'white',
  size = 'normal',
  hideOnMobile = false
}: LogoProps) => (
  <S.Wrapper color={color} size={size} hideOnMobile={hideOnMobile}>
    {controlIcon}
  </S.Wrapper>
)
export default Logo
