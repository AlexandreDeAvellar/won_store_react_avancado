import { FormSignUpValues } from '../../components/FormSignUp'
import { ForgotPasswordProps } from '../../components/FormForgotPassword'
import { ResetPasswordProps } from '../../components/FormResetPassword'

import Joi from 'joi'

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirm_password: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'confirm password does not match with password'
  })
}

export type FieldErros = {
  [key: string]: string
}

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErros = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function signUpValidate(values: FormSignUpValues) {
  const schema = Joi.object(fieldsValidations)
  const result = getFieldErrors(schema.validate(values, { abortEarly: false }))
  return result
}

export function signInValidate(values: Omit<FormSignUpValues, 'username'>) {
  const { email, password } = fieldsValidations
  const schema = Joi.object({ email, password })

  const result = getFieldErrors(schema.validate(values, { abortEarly: false }))
  return result
}

export function forgotValidate(values: ForgotPasswordProps) {
  const { email } = fieldsValidations
  const schema = Joi.object({ email })
  const result = getFieldErrors(schema.validate(values, { abortEarly: false }))
  return result
}

export function resetValidate(values: ResetPasswordProps) {
  const { password, confirm_password } = fieldsValidations
  const schema = Joi.object({ password, confirm_password })
  const result = getFieldErrors(schema.validate(values, { abortEarly: false }))
  return result
}
