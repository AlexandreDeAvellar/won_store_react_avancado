import { GetServerSidePropsContext } from 'next'
import FormProfile, { FormProfileProps } from '../../components/FormProfile'
import Profile from '../../templates/Profile'
import { protectedRoutesServer } from '../../utils/protected-routes'
import { initializeApollo } from '../../utils/apollo'
import { QUERY_PROFILE_ME } from '../../graphql/queries/profile'

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

  const { data } = await apolloClient.query({ query: QUERY_PROFILE_ME })
  return {
    props: { session, username: data.me?.username, email: data.me?.email }
  }
}
