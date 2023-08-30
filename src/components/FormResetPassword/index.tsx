import { errorIcon, lockIcon } from '../icons'

import Button from '../Button'
import TextField from '../TextField'

import { FormError, FormLoading, FormWrapper } from '../Form'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

import { FieldErros, resetValidate } from '../../utils/validation'

export type ResetPasswordProps = {
  password: string
  confirm_password: string
}

const FormResetPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldErros, setFieldErros] = useState<FieldErros>({})
  const [values, setValue] = useState<ResetPasswordProps>({ password: '', confirm_password: '' })
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const handleInputChange = (field: string, value: string) => {
    setValue((v) => ({ ...v, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = resetValidate(values)

    if (Object.keys(errors).length) {
      setFieldErros(errors)
      setLoading(false)
      return
    }
    setFieldErros({})

    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        password: values.password,
        passwordConfirmation: values.confirm_password,
        code: router.query.code
      })
    })

    const data = await result.json()

    if (data.error) {
      if (data.error.status === 500) {
        setFormError('Incorrect code provided.')
      } else {
        setFormError(data.error.message)
      }
    } else {
      signIn('credentials', {
        email: data.user.email,
        password: values.password,
        callbackUrl: '/'
      })
    }

    setLoading(false)
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <span>{errorIcon}</span>
          {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={lockIcon}
          onInputChange={(v) => handleInputChange('password', v)}
          error={fieldErros.password}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          icon={lockIcon}
          onInputChange={(v) => handleInputChange('confirm_password', v)}
          error={fieldErros.confirm_password}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Reset Password</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormResetPassword
