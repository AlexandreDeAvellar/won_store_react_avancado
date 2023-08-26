import 'next-auth'

declare module 'next-auth' {
  interface Session {
    id: string
    jwt: string
    name: string
    user?: {
      image?: string
      name?: string
    }
  }

  interface User {
    jwt: string
    username: string
  }
}
