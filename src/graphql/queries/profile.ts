import { gql } from '@apollo/client'

export type QueryProfileMeProps = {
  usersPermissionsUser: {
    data: {
      id: string
      attributes: {
        username: string
        email: string
      }
    }
  }
}

export type QueryProfileMeVariables = {
  id: string
}

export const QUERY_PROFILE_ME = gql`
  query QueryProfileMe($id: ID) {
    usersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          username
          email
        }
      }
    }
  }
`
