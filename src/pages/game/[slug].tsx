import Game, { GameTemplateProps } from '../../templates/Game'

import { useRouter } from 'next/router'

import { initializeApollo } from '../../utils/apollo'
import { QUERY_GAME_BY_SLUG } from '../../graphql/queries/game-by-slug'
import { QUERY_GAMES } from 'graphql/queries/games'
import { GetStaticProps } from 'next'
import { gameBySlugTransform } from '../../utils/graphql-transform/game-by-slug/game-by-slug'

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
  const { data } = await apolloClient.query({ query: QUERY_GAME_BY_SLUG, variables: { slug: `${params?.slug}` } })
  const game = gameBySlugTransform(data)

  if (!data.games.data.length) return { notFound: true }

  return {
    props: {
      revalidate: 60,
      ...game
    }
  }
}

export default Index
