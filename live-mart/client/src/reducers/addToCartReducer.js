import { ADD_TO_CART } from '../actions/types'

export default function addToCartReducer(state = {}, action) {
  console.log(state)
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state }
    default:
      return {}
  }
}
