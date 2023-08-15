import { GameDetailsProps } from '../../../components/GameDetails'
import { GameTemplateProps } from '../../../templates/Game/index'
import { currencyFormat } from '../../../utils/format'

const host = process.env.NEXT_PUBLIC_HOST + ':1337'

export type DataAttributeNAME = { data: [{ attributes: { name: string } }] }

export type GameBySlugGraphqlProps = {
  data: [
    {
      attributes: {
        name: string
        short_description: string
        description: string
        price: number
        rating: 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'
        release_date: string
        gallery: { data: [{ attributes: { src: string; label: string } }] }
        cover: { data: { attributes: { src: string } } }
        developers: DataAttributeNAME
        publisher: DataAttributeNAME
        categories: DataAttributeNAME
        platforms: { data: [{ attributes: { name: 'windows' | 'linux' | 'mac' } }] }
      }
      id: string
    }
  ]
}

export const gameBySlugTransform = ({ data }: GameBySlugGraphqlProps): GameTemplateProps => {
  const game = data[0].attributes

  const cover = host + game.cover.data.attributes.src
  const description = game.description
  const details: GameDetailsProps = {
    developer: game.developers.data[0].attributes.name,
    genres: game.categories.data.map((e) => e.attributes.name),
    platforms: game.platforms.data.map((e) => e.attributes.name),
    publisher: game.developers.data[0].attributes.name,
    rating: game.rating,
    releaseDate: game.release_date
  }
  const gameInfo = { id: '', title: game.name, description: game.short_description, price: currencyFormat(game.price) }
  const upcomingHighlight = { title: '', backgroundImage: '', buttonLabel: '', buttonLink: '', subtitle: '' }
  const gallery = game.gallery.data.map((e) => ({
    src: host + e.attributes.src,
    label: e.attributes.label
  }))

  const recommendedTitle = ''

  return { recommendedTitle, cover, description, details, gameInfo, recommendedGames: [], upcomingGames: [], upcomingHighlight, gallery: gallery }
}
