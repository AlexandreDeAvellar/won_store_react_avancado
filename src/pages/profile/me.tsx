import { GetServerSidePropsContext } from 'next'
import FormProfile, { FormProfileProps } from '../../components/FormProfile'
import Profile from '../../templates/Profile'
import { protectedRoutesServer } from '../../utils/protected-routes'
import { initializeApollo } from '../../utils/apollo'
import { QUERY_PROFILE_ME, QueryProfileMeProps, QueryProfileMeVariables } from '../../graphql/queries/profile'

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutesServer(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryProfileMeProps, QueryProfileMeVariables>({
    query: QUERY_PROFILE_ME,
    variables: { id: session?.user?.id as string }
  })

  return {
    props: {
      session,
      username: data?.usersPermissionsUser?.data?.attributes?.username,
      email: data?.usersPermissionsUser?.data?.attributes?.email
    }
  }
}
