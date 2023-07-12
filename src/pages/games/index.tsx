import GamesTemplate, { GamesTemplateProps } from '../../templates/Games'
import { explorerSidebarItemProps } from '../../components/ExploreSidebar/explorer-sidebar-mocks'
import { initializeApollo } from '../../utils/apollo'
import { QUERY_GAMES } from '../../graphql/queries/games'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  await apolloClient.query({ query: QUERY_GAMES, variables: { limit: 4 } })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems: explorerSidebarItemProps
    }
  }
}
