import Game, { GameTemplateProps } from '../../templates/Game'

import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import { initializeApollo } from '../../utils/apollo'

import { gameBySlugTransform } from '../../utils/graphql-transform/game-by-slug/game-by-slug'
import { recommendedTransform } from '../../utils/graphql-transform/recommended'
import { upcomingTransform } from '../../utils/graphql-transform/upcoming'

import { QUERY_GAME_BY_SLUG } from '../../graphql/queries/game-by-slug'
import { QUERY_GAMES } from '../../graphql/queries/games'
import { QUERY_RECOMMENDED } from '../../graphql/queries/recommended'
import { QUERY_UPCOMING } from '../../graphql/queries/upcoming'

const apolloClient = initializeApollo()

const Index = (props: GameTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query({ query: QUERY_GAMES, variables: { limit: 4 } })

  const paths = data?.games.data?.map((game: { attributes: { slug: string } }) => ({ params: { slug: game.attributes.slug } }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: recommended } = await apolloClient.query({ query: QUERY_RECOMMENDED })
  const { recommendedGames, recommendedTitle } = recommendedTransform(recommended?.recommended)

  const { data } = await apolloClient.query({ query: QUERY_GAME_BY_SLUG, variables: { slug: `${params?.slug}` }, fetchPolicy: 'no-cache' })
  const game = gameBySlugTransform(data.games)

  const { data: upcomming } = await apolloClient.query({ query: QUERY_UPCOMING, variables: { date: '2023-01-01' } })
  const { upcomingGames, upcomingHighlight } = upcomingTransform({
    upcomingGames: upcomming.upcomingGames,
    upcomingGamesHighlight: upcomming.showcase.data.attributes.upcomingGamesHighlight.highlight
  })

  if (!data.games.data.length) return { notFound: true }

  return {
    revalidate: 60,
    props: {
      slug: params?.slug,
      ...game,
      recommendedGames,
      recommendedTitle,
      upcomingGames,
      upcomingHighlight
    }
  }
}

export default Index
