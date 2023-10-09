import { currencyFormat } from '../../utils/format'
import { QueryOrdersProps } from '../../graphql/queries/orders'

export const ordersTransform = (items: QueryOrdersProps[]) => {
  const {
    orders: { data }
  } = items[0]
  const result = !data
    ? []
    : data.map((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.attributes.card_brand,
            img: order.attributes.card_brand ? `/img/cards/${order.attributes.card_brand}.png` : null,
            number: order.attributes.card_last4 ? `**** **** **** ${order.attributes.card_last4}` : 'Free Game',
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(order.attributes.createdAt))}`
          },
          games: order.attributes.games.data.map((game) => ({
            id: game.id,
            title: game.attributes.name,
            downloadLink: 'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: `${process.env.NEXT_PUBLIC_API_URL}${game.attributes?.cover?.data.attributes.url}`,
            price: currencyFormat(game.attributes.price)
          }))
        }
      })

  return result
}
