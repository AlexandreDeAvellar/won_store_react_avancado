import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from '../../graphql/queries/recommended'
import { recommendedTransform } from 'utils/graphql-transform/recommended'
import Success, { SuccessTemplateProps } from 'templates/Success'

export default function SuccessPage(props: SuccessTemplateProps) {
  return <Success {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: QUERY_RECOMMENDED })
  const { recommendedTitle, recommendedGames, recommendedHighlight } = recommendedTransform(data?.recommended)

  return {
    revalidate: 60 * 60,
    props: {
      recommendedTitle,
      recommendedGames,
      recommendedHighlight
    }
  }
}
