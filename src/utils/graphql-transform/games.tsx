/* eslint-disable @typescript-eslint/no-explicit-any */
import { currencyFormat } from '../../utils/format'
import { GameCardProps } from '../../components/GameCard'

export type GameCardGraphqlProps = {
  data: [
    {
      attributes: {
        name: string
        slug: string
        cover: {
          data: {
            attributes: {
              url: string
            }
          }
        }
        developers: {
          data: {
            attributes: {
              name: string
            }
          }
        }
        price: number
      }
    }
  ]
}

export const gameCardTransform = ({ data }: GameCardGraphqlProps): GameCardProps[] => {
  const gameCards = data.map((r: any) => ({
    title: r.attributes.name,
    slug: r.attributes.slug,
    developer: r.attributes.developers.data[0].attributes.name,
    img: `${process.env.NEXT_PUBLIC_APP_URL_GRAPHQL}${r.attributes.cover.data.attributes.url}`,
    price: currencyFormat(r.attributes.price),
    promotionalPrice: new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(r.attributes.price)
  }))
  return gameCards
}
