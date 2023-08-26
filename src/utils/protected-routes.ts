import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'
import { nextAuthOptions } from '../pages/api/auth/[...nextauth]'

export const protectedRoutes = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context)

  if (!session) {
    context.res.writeHead(302, { Location: `/sign-in?callbackUrl=${context.resolvedUrl}` })
    context.res.end()
  }

  return session
}

export const protectedRoutesServer = async ({ req, res, resolvedUrl }: GetServerSidePropsContext) => {
  const session = await getServerSession(req, res, nextAuthOptions)

  if (!session) {
    res.writeHead(302, { Location: `/sign-in?callbackUrl=${resolvedUrl}` })
    res.end()
  }

  return session
}
