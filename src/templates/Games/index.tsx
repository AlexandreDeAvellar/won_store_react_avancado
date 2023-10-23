import Base from '../Base'

import ExploreSidebar, { ItemProps } from '../../components/ExploreSidebar'
import GameCard from '../../components/GameCard'
import { arrowDownIcon } from '../../components/icons'
import { Grid } from '../../components/Grid'
import Empty from '../../components/Empty'

import * as S from './styles'
import { gameCardTransform } from '../../utils/graphql-transform'
import { parseQueryStringToFilter, parseQueryStringToWhere } from '../../utils/filter'

import { useQueryGames } from '../../graphql/queries/games'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'
import Image from 'next/image'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()
  const { data, error, loading, fetchMore } = useQueryGames({
    limit: 4,
    start: 0,
    filters: {
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  const [gamesData, setGamesData] = useState(data)

  useEffect(() => {
    setGamesData(data)
  }, [data])

  if (error) {
    return <p>{`Erro: ${error}`}</p>
  }

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({ pathname: '/games', query: items })
    return
  }

  const hasMoreGames = () => {
    const result = gamesData?.games?.data?.length < (data?.gamesConnection?.meta?.pagination?.total || 10000)
    return result
  }

  const handleShowMore = async () => {
    const length = gamesData?.games?.data?.length
    const { data: content } = await fetchMore({
      variables: {
        start: length,
        limit: 4,
        filters: {
          where: parseQueryStringToWhere({ queryString: query, filterItems }),
          sort: query.sort as string | null
        }
      }
    })
    const games = { games: { data: [...gamesData.games.data, ...content.games.data] } }
    setGamesData(games)
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} initialValues={parseQueryStringToFilter({ queryString: query, filterItems })} />

        <section>
          {gamesData?.games?.data?.length ? (
            <>
              <Grid>
                {gameCardTransform(gamesData?.games).map((item) => (
                  <GameCard key={item.title} {...item} />
                ))}
              </Grid>
              {hasMoreGames() && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading>{<Image src="/img/dots.svg" alt="Loading more games..." fill />}</S.ShowMoreLoading>
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Show More</p>
                      <S.ArrowDown>{arrowDownIcon}</S.ArrowDown>
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : loading ? (
            <p>Loading...</p>
          ) : (
            <Empty title=":(" description="We didn't find any games with this filter" />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
