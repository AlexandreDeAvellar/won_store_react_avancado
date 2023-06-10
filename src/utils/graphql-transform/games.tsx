/* eslint-disable @typescript-eslint/no-explicit-any */
import { GameCardProps } from '../../components/GameCard'

export const gameCardTransform = (data: any): GameCardProps[] => {
  const gameCards = data.map((r: any) => ({
    title: r.attributes.name,
    developer: r.attributes.developers.data[0].attributes.name,
    img: `${process.env.NEXT_PUBLIC_APP_URL_GRAPHQL}` + r.attributes.cover.data.attributes.url,
    price: new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(r.attributes.price),
    promotionalPrice: new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(r.attributes.price)
  }))
  return gameCards
}
