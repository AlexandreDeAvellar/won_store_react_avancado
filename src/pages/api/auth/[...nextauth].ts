import CredentialsProvider from 'next-auth/providers/credentials'

// https://next-auth.js.org/configuration/providers/credentials
// https://next-auth.js.org/configuration/pages

import NextAuth, { NextAuthOptions } from 'next-auth'

export const nextAuthOptions: NextAuthOptions = {
  pages: {
    signIn: 'sign-in'
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const content = { identifier: credentials?.email, password: credentials?.password }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
          method: 'POST',
          body: JSON.stringify(content),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const data = await response.json()

        if (response.ok && data.user) return { ...data.user, jwt: data.jwt }

        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = user.jwt
        token.id = user.id
        token.email = user.email
        token.name = user.username
      }
      return Promise.resolve(token)
    },
    async session({ session, token }) {
      session.name = token.name as string
      session.jwt = token.accessToken as string
      session.user.id = token.id as string
      session.user.name = token.name as string
      session.user!.image = '/img/logo.svg'
      session.user.email = token.email as string
      return Promise.resolve(session)
    }
  }
}

const handler = NextAuth(nextAuthOptions)

export default handler
// export { handler as GET, handler as POST }
