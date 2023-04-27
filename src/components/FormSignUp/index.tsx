import Link from 'next/link'
import { accountCircleIcon, mailIcon, lockIcon } from '../icons'

import Button from '../Button'
import TextField from '../TextField'

import { FormLink, FormWrapper } from '../Form'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField name="name" placeholder="Name" type="name" icon={accountCircleIcon} />
      <TextField name="email" placeholder="Email" type="email" icon={mailIcon} />
      <TextField name="password" placeholder="Password" type="password" icon={lockIcon} />
      <TextField name="confirm-password" placeholder="Confirm password" type="password" icon={lockIcon} />

      <Button size="large" fullWidth>
        Sign up now
      </Button>

      <FormLink>
        Already have an account? <Link href="/sign-in">Sign in</Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp
