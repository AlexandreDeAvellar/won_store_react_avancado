import 'next-auth'

declare module 'next-auth' {
  interface Session {
    jwt: string
    name: string
    user: {
      id: string
      image?: string
      name: string
      email: string
    }
  }

  interface User {
    jwt: string
    username: string
  }
}
