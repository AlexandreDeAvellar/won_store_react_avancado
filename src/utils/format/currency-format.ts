export const currencyFormat = (price: number | bigint): string => {
  return new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(price)
}
