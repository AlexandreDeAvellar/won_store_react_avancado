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

      <TextField name="password" type="password" placeholder="Type your password" label="Password" />

      <TextField name="new_password" type="password" placeholder="New password" label="New password" />

      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
