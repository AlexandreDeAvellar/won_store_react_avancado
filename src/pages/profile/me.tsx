import { GetServerSidePropsContext } from 'next'
import FormProfile from '../../components/FormProfile'
import Profile from '../../templates/Profile'
import { protectedRoutesServer } from '../../utils/protected-routes'

export default function Me() {
  return (
    <Profile>
      <FormProfile />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutesServer(context)

  return {
    props: { session }
  }
}
