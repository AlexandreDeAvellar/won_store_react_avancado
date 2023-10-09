import { graphql_host } from '../../utils/graphql-transform/graphql_host'
import { mockUseCartItems } from '../../hooks/use-cart/use-cart-mock'
import { QUERY_WISHLIST } from '../../graphql/queries/wishlist'
import { MUTATION_CREATE_WISHLIST, MUTATION_UPDATE_WISHLIST } from '../../graphql/mutations/wishlist'

const get_result = {
  data: {
    wishlists: {
      data: [
        {
          id: '1',
          attributes: {
            games: mockUseCartItems
          }
        }
      ]
    }
  }
}

const create_result = {
  data: {
    createWishlist: {
      data: {
        id: '1',
        attributes: {
          games: { data: [mockUseCartItems.data[0]] }
        }
      }
    }
  }
}

export const update_result = {
  data: {
    updateWishlist: {
      data: {
        id: '1',
        attributes: {
          games: { data: [...mockUseCartItems.data, { attributes: { ...mockUseCartItems.data[0].attributes, name: 'Novo Jogo' }, id: '3' }] }
        }
      }
    }
  }
}

export const remove_result = {
  data: {
    updateWishlist: {
      data: {
        id: '1',
        attributes: {
          games: { data: [mockUseCartItems.data[0]] }
        }
      }
    }
  }
}

export const mockGetWishlist = {
  request: {
    query: QUERY_WISHLIST,
    context: { session: { jwt: 'hashed_id' } },
    variables: { identifier: 'mail@mail.com' }
  },
  result: get_result
}

export const mockCreateWishList = {
  request: {
    query: MUTATION_CREATE_WISHLIST,
    context: { session: { jwt: 'hashed_id' } },
    variables: { data: { user: '3', games: ['1'] } }
  },
  result: create_result
}

export const mockUpdateWishlist = {
  request: {
    query: MUTATION_UPDATE_WISHLIST,
    context: { session: { jwt: 'hashed_id' } },
    variables: { id: '1', data: { user: '3', games: ['1', '2', '3'] } }
  },
  result: update_result
}

export const mockRemoveFromWishlist = {
  request: {
    query: MUTATION_UPDATE_WISHLIST,
    context: { session: { jwt: 'hashed_id' } },
    variables: { id: '1', data: { user: '3', games: ['1'] } }
  },
  result: remove_result
}

export const mockWishlistItems = [
  {
    id: '1',
    title: 'Enter the Gungeon',
    slug: 'enter-the-gungeon',
    developer: 'Dodge Roll',
    img: graphql_host + '/uploads/enter_the_gungeon_46f4fe4c68.jpg',
    price: '$27.99',
    promotionalPrice: '$27.99'
  },
  {
    id: '2',
    title: 'The Witcher: Enhanced Edition',
    slug: 'the-witcher',
    developer: 'CD PROJEKT RED',
    img: graphql_host + '/uploads/the_witcher_fe844be564.jpg',
    price: '$10.50',
    promotionalPrice: '$10.50'
  }
]

export const mockUpdateWishlistItems = [...mockWishlistItems, { ...mockWishlistItems[0], title: 'Novo Jogo', id: '3' }]
