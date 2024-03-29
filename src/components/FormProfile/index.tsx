import Link from 'next/link'
import Button from '../Button'
import Heading from '../Heading'
import TextField from '../TextField'

import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ username, email }: FormProfileProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField name="username" placeholder="Username" label="Username" initialValue={username} />

      <TextField name="email" type="email" placeholder="E-mail" initialValue={email} label="E-mail" disabled />

      <S.ButtonContainer>
        <Link href={`/forgot-password?email=${email}`} passHref legacyBehavior>
          <Button minimal size="medium" as="a">
            Reset Password
          </Button>
        </Link>
        <Button size="medium">Save</Button>
      </S.ButtonContainer>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
