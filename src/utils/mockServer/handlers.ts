import { rest } from 'msw'

type ForgotPasswordReqBody = {
  email: string
}

export const handlers = [
  rest.post<ForgotPasswordReqBody>(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`, async (req, res, ctx) => {
    const data = await req.json()

    console.log(data)
  })
]
