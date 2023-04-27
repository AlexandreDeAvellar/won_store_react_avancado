import Link from 'next/link'
import { accountCircleIcon, mailIcon, lockIcon } from '../icons'

import Button from '../Button'
import TextField from '../TextField'

import * as S from './styles'

const FormSignUp = () => (
  <S.Wrapper>
    <form>
      <TextField name="name" placeholder="Name" type="name" icon={accountCircleIcon} />
      <TextField name="email" placeholder="Email" type="email" icon={mailIcon} />
      <TextField name="password" placeholder="Password" type="password" icon={lockIcon} />
      <TextField name="confirm-password" placeholder="Confirm password" type="password" icon={lockIcon} />

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <S.FormLink>
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignUp
