import { currencyFormat } from '../../../utils/format'

export const fakeCover = {
  __typename: 'UploadFileEntityResponse',
  data: {
    __typename: 'UploadFileEntity',
    attributes: {
      __typename: 'UploadFile',
      src: '/uploads/cyberpunk_2077_744b494fe9.jpg'
    }
  }
}

const host = process.env.NEXT_PUBLIC_APP_URL_GRAPHQL + ':1337'

export const fakeCoverResult = '/uploads/cyberpunk_2077_744b494fe9.jpg'

export const fakeGalerry = {
  __typename: 'UploadFileRelationResponseCollection',
  data: [
    {
      __typename: 'UploadFileEntity',
      attributes: {
        __typename: 'UploadFile',
        src: '/uploads/cyberpunk_2077_6a62e33c34.jpg',
        label: null
      }
    },
    {
      __typename: 'UploadFileEntity',
      attributes: {
        __typename: 'UploadFile',
        src: '/uploads/cyberpunk_2077_56abf33806.jpg',
        label: null
      }
    }
  ]
}

export const fakeDevelopers = {
  __typename: 'DeveloperRelationResponseCollection',
  data: [
    {
      __typename: 'DeveloperEntity',
      attributes: {
        __typename: 'Developer',
        name: 'CD PROJEKT RED'
      }
    }
  ]
}

export const fakePublisher = {
  __typename: 'PublisherEntityResponse',
  data: null
}

export const fakeCategories = {
  __typename: 'CategoryRelationResponseCollection',
  data: [
    {
      __typename: 'CategoryEntity',
      attributes: {
        __typename: 'Category',
        name: 'Role-playing'
      }
    },
    {
      __typename: 'CategoryEntity',
      attributes: {
        __typename: 'Category',
        name: 'Sci-fi'
      }
    }
  ]
}

export const fakePlatforms = {
  __typename: 'PlatformRelationResponseCollection',
  data: [
    {
      __typename: 'PlatformEntity',
      attributes: {
        __typename: 'Platform',
        name: 'windows'
      }
    }
  ]
}

export const fakeGame = {
  __typename: 'Game',
  name: 'Cyberpunk 2077',
  slug: 'cyberpunk-2077',
  short_description: 'short_description',
  description: 'description',
  price: 199.9,
  rating: 'BR18',
  release_date: '2020-12-10',
  gallery: fakeGalerry,
  cover: fakeCover,
  developers: fakeDevelopers,
  publisher: fakePublisher,
  categories: fakeCategories,
  platforms: fakePlatforms
}

export const game = {
  games: {
    __typename: 'GameEntityResponseCollection',
    data: [
      {
        __typename: 'GameEntity',
        attributes: fakeGame
      }
    ]
  }
}

export const gameResult = {
  cover: host + fakeCoverResult,
  description: fakeGame.description,
  details: {
    developer: fakeGame.developers.data[0].attributes.name,
    genres: fakeGame.categories.data.map((e) => e.attributes.name),
    platforms: fakeGame.platforms.data.map((e) => e.attributes.name),
    publisher: fakeGame.developers.data[0].attributes.name,
    rating: fakeGame.rating,
    releaseDate: fakeGame.release_date
  },
  gameInfo: { title: fakeGame.name, description: fakeGame.short_description, price: currencyFormat(fakeGame.price) },
  recommendedGames: [],
  upcomingGames: [],
  upcomingHighlight: {},
  gallery: fakeGame.gallery.data.map((e) => ({ src: host + e.attributes.src, label: e.attributes.label }))
}
