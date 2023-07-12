import Base from '../Base'

import ExploreSidebar, { ItemProps } from '../../components/ExploreSidebar'
import GameCard from '../../components/GameCard'
import { arrowDownIcon } from '../../components/icons'
import { Grid } from '../../components/Grid'

import * as S from './styles'
import { gameCardTransform } from '../../utils/graphql-transform'

import { useQueryGames } from '../../graphql/queries/games'
import { useEffect, useState } from 'react'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, error, loading, fetchMore } = useQueryGames()

  const [gamesData, setGamesData] = useState(data)

  useEffect(() => {
    setGamesData(() => (data ? data : { games: { data: [] } }))
  }, [data])

  if (error) {
    return <p>{`Erro: ${error}`}</p>
  }

  const handleFilter = () => {
    return
  }

  const handleShowMore = async () => {
    const length = gamesData?.games.data.length
    const { data: content } = await fetchMore({ variables: { start: length, limit: 2 } })
    const games = { games: { data: [...gamesData.games.data, ...content.games.data] } }
    setGamesData(games)
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <p> Loading... </p>
        ) : (
          <section>
            <Grid>
              {gameCardTransform(gamesData?.games).map((item) => (
                <GameCard key={item.title} {...item} />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <S.ArrowDown>{arrowDownIcon}</S.ArrowDown>
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
