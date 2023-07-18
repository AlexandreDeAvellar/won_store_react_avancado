import { useEffect, useState } from 'react'
import { closeIcon, filterListIcon } from '../icons'

import Heading from '../Heading'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Radio from '../Radio'

import * as S from './styles'
import { ParsedUrlQueryInput } from 'querystring'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

// type Values = {
//   [field: string]: boolean | string
// }

type Values = ParsedUrlQueryInput

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const ExploreSidebar = ({ items, onFilter, initialValues = {} }: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    onFilter(values)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  const handleCheckbox = (name: string, value: string, checked: boolean) => {
    let currentList: string[] = (values[name] as []) || []

    checked && !currentList.includes(value) && currentList.push(value)
    !checked && currentList.includes(value) && (currentList = currentList.filter((e) => e !== value))

    setValues((s) => ({ ...s, platforms: currentList }))
  }

  const handleRadio = (name: string, value: string | boolean) => {
    setValues((s) => ({ ...s, [name]: value }))
  }

  const handleFilterMenu = () => {
    setIsOpen(false)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        {!isOpen && (
          <S.FilterIcon aria-label="open filters" onClick={() => setIsOpen(true)}>
            {filterListIcon}
          </S.FilterIcon>
        )}
        {isOpen && (
          <S.CloseIcon aria-label="close filters" onClick={() => setIsOpen(false)}>
            {closeIcon}
          </S.CloseIcon>
        )}
      </S.IconWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>

            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  // isChecked={!!values[field.name]}
                  isChecked={(values[item.name] as string[])?.includes(field.name)}
                  onCheck={(checked) => handleCheckbox(item.name, field.name, checked)}
                />
              ))}

            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  value={field.name}
                  name={item.name}
                  label={field.label}
                  labelFor={field.name}
                  defaultChecked={String(field.name) === String(values[item.name])}
                  onChange={() => handleRadio(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilterMenu}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ExploreSidebar
