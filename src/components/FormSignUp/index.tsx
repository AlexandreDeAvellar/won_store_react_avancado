import Link from 'next/link'
import { useState } from 'react'
import { useMutation } from '@apollo/client'

import Button from '../Button'
import TextField from '../TextField'

import { FormError, FormLink, FormLoading, FormWrapper } from '../Form'
import { accountCircleIcon, mailIcon, lockIcon } from '../icons'
import { MUTATION_REGISTER } from '../../graphql/mutations/register'
import { signIn } from 'next-auth/react'

import { FieldErros, signUpValidate } from '../../utils/validation'

export type FormSignUpValues = {
  username: string
  email: string
  password: string
}

const FormSignUp = () => {
  const [formError, setFormError] = useState('')
  const [fieldErros, setFieldErros] = useState<FieldErros>({})
  const [values, setValues] = useState<FormSignUpValues>({ username: '', email: '', password: '' })

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) => {
      setFormError(err.message)
    },
    onCompleted: () => {
      !error && signIn('credentials', { email: values.email, password: values.password, callbackUrl: '/' })
    }
  })

  const handleInput = (field: string, value: string) => {
    setValues((e) => ({ ...e, [field]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldErros(errors)
      return
    }

    setFieldErros({})

    createUser({
      variables: {
        input: { username: values.username, email: values.email, password: values.password }
      }
    })
  }

  return (
    <FormWrapper>
      {!!formError && <FormError>{formError}</FormError>}
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          icon={accountCircleIcon}
          onInputChange={(v) => handleInput('username', v)}
          error={fieldErros.username}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={mailIcon}
          onInputChange={(v) => handleInput('email', v)}
          error={fieldErros.email}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={lockIcon}
          onInputChange={(v) => handleInput('password', v)}
          error={fieldErros.password}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          icon={lockIcon}
          onInputChange={(v) => handleInput('confirm_password', v)}
          error={fieldErros.confirm_password}
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
