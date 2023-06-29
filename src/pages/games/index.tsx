import GamesTemplate, { GamesTemplateProps } from '../../templates/Games'
import { explorerSidebarItemProps } from '../../components/ExploreSidebar/explorer-sidebar-mocks'
import { initializeApollo } from '../../utils/apollo'
import { QUERY_GAMES } from '../../graphql/queries/games'
import { gameCardTransform } from '../../utils/graphql-transform/games'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  const apoloClient = initializeApollo()
  const { data } = await apoloClient.query({ query: QUERY_GAMES, variables: { limit: 4 } })

  return {
    props: {
      games: gameCardTransform(data?.games),
      filterItems: explorerSidebarItemProps
    }
  }
}
