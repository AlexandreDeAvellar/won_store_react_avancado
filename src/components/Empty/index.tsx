import Button from '../Button'
import Link from 'next/link'
import * as S from './styles'
import Image from 'next/image'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <Image src="/img/empty.svg" alt="A gamer in a couch playing videogame" role="image" width={210} height={220} />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/" passHref legacyBehavior>
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
