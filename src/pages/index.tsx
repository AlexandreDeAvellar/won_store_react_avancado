import Home, { HomeTemplateProps } from '../templates/Home'
import { homeTemplateProps } from '../templates/Home/home-mocks'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      ...homeTemplateProps
    }
  }
}
