import Link from 'next/link'
import { mailIcon, lockIcon } from '../icons'

import Button from '../Button'
import TextField from '../TextField'

import { FormError, FormLink, FormLoading, FormWrapper } from '../Form'
import * as S from './styles'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

import { FieldErros, signInValidate } from '../../utils/validation'

export type SignInProps = {
  email: string
  password: string
}

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [fieldErros, setFieldErros] = useState<FieldErros>({})
  const [values, setValue] = useState<SignInProps>({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setValue((v) => ({ ...v, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldErros(errors)
      setLoading(false)
      return
    }
    setFieldErros({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${router.query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return router.push(result.url)
    }

    setLoading(false)
    setFormError('username or password is invalid')
  }

  return (
    <FormWrapper>
      {!!formError && <FormError>{formError}</FormError>}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={mailIcon}
          onInputChange={(v) => handleInputChange('email', v)}
          error={fieldErros.email}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={lockIcon}
          onInputChange={(v) => handleInputChange('password', v)}
          error={fieldErros.password}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          Don’t have an account? <Link href="/sign-up">Sign up</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
