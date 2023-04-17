import Home from '../templates/Home'
import { homeTemplateProps } from '../templates/Home/home-mocks'

export default function Index() {
  return <Home {...homeTemplateProps} />
}
