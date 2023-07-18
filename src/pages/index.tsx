import { initializeApollo } from '../utils/apollo'
import Home, { HomeTemplateProps } from '../templates/Home'
import { QUERY_HOME } from '../graphql/queries/home'
import { bannerTransform, gameCardTransform, highlightTransform, sectionsTransform } from '../utils/graphql-transform'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({ query: QUERY_HOME, variables: { date: '2023-01-01' }, fetchPolicy: 'no-cache' })
  const banners = bannerTransform(data?.banners)
  const section = sectionsTransform(data?.sections)

  const games = {
    newGames: gameCardTransform(data?.newGames),
    upcomingGames: gameCardTransform(data?.upcomingGames),
    freeGames: gameCardTransform(data?.freeGames),
    mostPopularGames: gameCardTransform(section.popularGames?.games)
  }

  const titles = {
    freeGamesTitle: section.freeGames.title,
    newGamesTitle: section.newGames.title,
    popularGamesTitle: section.popularGames.title,
    upcomingTitle: section.upcoming.title
  }

  const highlights = {
    mostPopularHighLight: highlightTransform(section.popularGames.highlight[0]),
    upcomingHighlight: highlightTransform(section.upcoming.highlight),
    freeHighlight: highlightTransform(section.freeGames.highlight)
  }

  return {
    revalidate: 60,
    props: { banners, ...games, ...titles, ...highlights }
  }
}
