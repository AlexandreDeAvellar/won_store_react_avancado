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
      name: 'Sign-in',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const content = { identifier: credentials?.email, password: credentials?.password }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, {
          method: 'POST',
          body: JSON.stringify(content)
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
        token.accessToken = account?.access_token
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return Promise.resolve(token)
    },
    async session({ session, user }) {
      session.id = user.id
      session.jwt = user.jwt
      return Promise.resolve(session)
    }
  }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }
