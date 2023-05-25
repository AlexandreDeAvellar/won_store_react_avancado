import GamesTemplate, { GamesTemplateProps } from '../../templates/Games'
import { gameCardProps } from '../../components/GameCardSlider/game-card-slider-mocks'
import { explorerSidebarItemProps } from '../../components/ExploreSidebar/explorer-sidebar-mocks'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gameCardProps,
      filterItems: explorerSidebarItemProps
    }
  }
}
