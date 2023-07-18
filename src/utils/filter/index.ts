import { ItemProps } from 'components/ExploreSidebar'
import { ParsedUrlQueryInput } from 'querystring'

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

export const parseQueryStringToWhere = ({ queryString, filterItems }: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      const item = filterItems?.find((item) => item.name === key)
      // const type = item?.type === 'checkbox'

      const type = item?.type === 'checkbox' ? 'checkbox' : 'radio'
      const format = {
        checkbox: { name: { in: queryString[key] } },
        radio: { lte: Number(queryString[key]) }
      }
      obj[key.replace('_lte', '')] = format[type]
    })

  return obj
}

export const parseQueryStringToFilter = ({ queryString, filterItems }: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item) => item.name === key)
    const isCheckbox = item?.type === 'checkbox'
    const isArray = Array.isArray(queryString[key])

    obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key]
  })

  return obj
}
