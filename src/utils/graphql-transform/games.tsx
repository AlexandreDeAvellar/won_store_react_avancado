/* eslint-disable @typescript-eslint/no-explicit-any */
import { currencyFormat } from '../../utils/format'
import { GameCardProps } from '../../components/GameCard'
import { graphql_host } from './graphql_host'

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
          data: [
            {
              attributes: {
                name: string
              }
            }
          ]
        }
        price: number
      }
      id: string
    }
  ]
}

export const gameCardTransform = ({ data }: GameCardGraphqlProps): GameCardProps[] => {
  const gameCards = data.map((r) => ({
    id: r.id,
    title: r.attributes.name,
    slug: r.attributes.slug,
    developer: r.attributes.developers.data[0].attributes.name,
    img: `${graphql_host}${r.attributes.cover.data.attributes.url}`,
    price: currencyFormat(r.attributes.price),
    promotionalPrice: new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(r.attributes.price)
  }))
  return gameCards
}
