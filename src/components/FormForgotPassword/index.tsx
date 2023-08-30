import { mailIcon } from '../icons'

import Button from '../Button'
import TextField from '../TextField'

import { FormError, FormLoading, FormSuccess, FormWrapper } from '../Form'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { FieldErros, forgotValidate } from '../../utils/validation'
import { checkCircleIcon, errorIcon } from '../icons'

export type ForgotPasswordProps = {
  email: string
}

const FormForgotPassword = () => {
  const { query } = useRouter()
  const [success, setSuccess] = useState(false)
  const [formError, setFormError] = useState('')
  const [fieldErros, setFieldErros] = useState<FieldErros>({})
  const [values, setValue] = useState<ForgotPasswordProps>({ email: (query.email as string) || '' })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setValue((v) => ({ ...v, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = forgotValidate(values)

    if (Object.keys(errors).length) {
      setFieldErros(errors)
      setLoading(false)
      return
    }
    setFieldErros({})

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })

    const data = await response.json()
    setLoading(false)

    if (data.error) {
      setFormError('We have some internal problem. Please, try again later.')
    } else {
      setSuccess(true)
    }
  }

  return (
    <FormWrapper>
      {success ? (
        <FormSuccess>
          <span>{checkCircleIcon}</span>
          You just received an email
        </FormSuccess>
      ) : (
        <>
          {!!formError && (
            <FormError>
              <span>{errorIcon}</span>
              {formError}
            </FormError>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              placeholder="Email"
              type="text"
              initialValue={query.email as string}
              icon={mailIcon}
              onInputChange={(v) => handleInputChange('email', v)}
              error={fieldErros.email}
            />

            <Button type="submit" size="large" fullWidth disabled={loading}>
              {loading ? <FormLoading /> : <span>Send email</span>}
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  )
}

export default FormForgotPassword
