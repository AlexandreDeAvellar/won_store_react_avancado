import Link from 'next/link'
import { mailIcon, lockIcon } from '../icons'

import Button from '../Button'
import TextField from '../TextField'

import * as S from './styles'

const FormSignIn = () => (
  <S.Wrapper>
    <form>
      <TextField name="email" placeholder="Email" type="email" icon={mailIcon} />
      <TextField name="password" placeholder="Password" type="password" icon={lockIcon} />
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <S.FormLink>
        Don’t have an account? <Link href="/sign-up">Sign up</Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
