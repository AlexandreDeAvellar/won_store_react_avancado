import Link from 'next/link'
import { useState } from 'react'
import { useMutation } from '@apollo/client'

import Button from '../Button'
import TextField from '../TextField'

import { FormLink, FormLoading, FormWrapper } from '../Form'
import { accountCircleIcon, mailIcon, lockIcon } from '../icons'
import { MUTATION_REGISTER } from '../../graphql/mutations/register'

export type FormSignUpValues = {
  username: string
  email: string
  password: string
}

const FormSignUp = () => {
  const [values, setValues] = useState<FormSignUpValues>({ username: '', email: '', password: '' })

  const [createUser, { loading }] = useMutation(MUTATION_REGISTER)

  const handleInput = (field: string, value: string) => {
    setValues((e) => ({ ...e, [field]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    createUser({
      variables: {
        input: { username: values.username, email: values.email, password: values.password }
      }
    })
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField name="username" placeholder="Username" type="text" icon={accountCircleIcon} onInputChange={(v) => handleInput('username', v)} />
        <TextField name="email" placeholder="Email" type="email" icon={mailIcon} onInputChange={(v) => handleInput('email', v)} />
        <TextField name="password" placeholder="Password" type="password" icon={lockIcon} onInputChange={(v) => handleInput('password', v)} />
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          icon={lockIcon}
          onInputChange={(v) => handleInput('confirm-password', v)}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign up now</span>}
        </Button>

        <FormLink>
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
