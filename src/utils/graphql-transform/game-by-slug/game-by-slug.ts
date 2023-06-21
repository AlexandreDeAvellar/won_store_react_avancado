// import 'dotenv/config'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { GameTemplateProps } from '../../../templates/Game/index'
import { currencyFormat } from '../../../utils/format'

const host = process.env.NEXT_PUBLIC_HOST + ':1337'

type Name = { attributes: { name: string } }
type Gallery = { attributes: { src: string; label: string } }

export const gameBySlugTransform = (data: any): GameTemplateProps => {
  const game = data?.games?.data[0]?.attributes

  const cover = host + game.cover.data.attributes.src
  const description = game.description
  const details = {
    developer: game.developers.data[0].attributes.name,
    genres: game.categories.data.map((e: Name) => e.attributes.name),
    platforms: game.platforms.data.map((e: Name) => e.attributes.name),
    publisher: game.developers.data[0].attributes.name,
    rating: game.rating,
    releaseDate: game.release_date
  }
  const gameInfo = { title: game.name, description: game.short_description, price: currencyFormat(game.price) }
  const upcomingHighlight = { title: '', backgroundImage: '', buttonLabel: '', buttonLink: '', subtitle: '' }
  const gallery = game.gallery.data.map((e: Gallery) => ({
    src: host + e.attributes.src,
    label: e.attributes.label
  }))

  return { cover, description, details, gameInfo, recommendedGames: [], upcomingGames: [], upcomingHighlight, gallery: gallery }
}
